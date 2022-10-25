import { useInput } from 'hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Preview from '../create/Preview';
import { apis } from 'api/api';
import Footer from 'components/footer/Footer';
import swal from 'sweetalert';
import styled from 'styled-components';

export const orange = (str) => {
  const a = str.split('-');
  const b = Number(a.join(''));
  return b;
};

//날짜관련 작업입니다.
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate() >= 10 ? now.getDate() : '0' + String(now.getDate());
let day2 = now.getDate() + 1 >= 10 ? now.getDate() + 1 : '0' + String(now.getDate() + 1);
let day3 = now.getDate() + 2 >= 10 ? now.getDate() + 2 : '0' + String(now.getDate() + 2);
let nowDate = Number(day) + month * 100 + year * 10000;
let arr = [String(year), String(month), String(day)];
let arr2 = [String(year), String(month), String(day2)];
let arr3 = [String(year), String(month), String(day3)];
let nowDateState = arr.join('-'); //모집시작일
let nowDateState2 = arr2.join('-'); //모집마감일
let nowDateState3 = arr3.join('-'); //활동시작일,활동마감일

const CardCreateForm = () => {
  const navigate = useNavigate();
  const [title, setTitle, titleChange] = useInput('');
  const [tag, setTag, tagChange] = useInput([]);
  const [location, setLocation, locationChange] = useInput('');
  const [limitPeople, setLimitPeople, limitPeopleChange] = useInput('');
  const [joinStartDate, setJoinStartDate] = useState(nowDateState);
  const [joinEndDate, setJoinEndDate] = useState(nowDateState2);
  const [meetingStartDate, setMeetingStartDate] = useState(nowDateState3);
  const [meetingEndDate, setMeetingEndDate] = useState(nowDateState3);
  const [content, setContent, contentChange] = useInput('');
  const [image, setImage] = useState('');

  const list = [2, 3, 4, 5, 6, 7, 8];

  const data = {
    title: title,
    content: content,
    joinStartDate: joinStartDate,
    joinEndDate: joinEndDate,
    meetingStartDate: meetingStartDate,
    meetingEndDate: meetingEndDate,
    location: location,
    limitPeople: limitPeople,
    tagMeetingIds: tag,
  };

  const onClickSubmitHandler = async (e) => {
    e.preventDefault();
    const JSD = orange(joinStartDate && joinStartDate);
    const JED = orange(joinEndDate && joinEndDate);
    const MSD = orange(meetingStartDate && meetingStartDate);
    const MED = orange(meetingEndDate && meetingEndDate);
    let formData = new FormData();

    if (JSD < JED && JED < MSD && MSD <= MED && image) {
      formData.append('image', image);
      formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
      await apis
        .createMeeting(formData)
        .then((res) => {
          navigate('/meeting');
        })
        .catch((err) => {
          swal(
            `이미지파일이 jpg형식인지 확인해주시기 바랍니다.\n\n혹은 모든 항목이 완료되었는지 확인해주시기 바랍니다.`
          );
        });
    } else if (!(JSD < JED)) {
      swal('모집마감일은 모집시작일보다 이후이어야 합니다.');
    } else if (!(JED < MSD)) {
      swal('활동시작일은 모집마감일보다 이후이어야 합니다.');
    } else if (!(MSD <= MED)) {
      swal('활동시작일은 활동마감일보다 이후일 수 없습니다.');
    } else if (!image) {
      swal('이미지가 필요합니다.');
    }
  };

  const onClickGoOut = (e) => {
    e.preventDefault();
    swal('작성한 내용이 사라질 수 있습니다. 그래도 나가시겠습니까?', {
      buttons: {
        cancel: '아니요. 계속 작성할래요',
        '네,나갈래요': true,
      },
    }).then((value) => {
      switch (value) {
        case '네,나갈래요':
          navigate('/meeting');
          break;

        default:
          break;
      }
    });
  };

  const onChangeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  //태그를 다루는 파트입니다.

  const [tagList, setTagList] = useState([
    { id: 1, name: '#챌린지', state: false },
    { id: 2, name: '#플로깅', state: false },
    { id: 3, name: '#비건', state: false },
    { id: 4, name: '#재활용', state: false },
    { id: 5, name: '#이모저모(친목)', state: false },
    { id: 6, name: '#반려용품', state: false },
    { id: 7, name: '#기타', state: false },
  ]);

  return (
    <>
      <div className="mt-10 text-2xl font-bold text-gray-600 flex justify-center">모임 생성</div>
      <div className="flex justify-center">
        <div className="w-3/5 ">
          <div className="">
            <div className="px-4">
              <div className="h-full">
                <label className="mt-5 block text-sm font-medium text-gray-700"></label>
                <div className="mt-1 h-full flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center flex flex-col items-center justify-center">
                    {image ? (
                      <Preview img={image} />
                    ) : (
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>클릭해서 사진 올리기</span>
                        <input
                          id="file-upload"
                          name="image"
                          type="file"
                          className="sr-only"
                          onChange={(e) => {
                            onChangeImageHandler(e);
                          }}
                        />
                      </label>
                    </div>
                    <p className="pl-1 text-sm">(jpg형식만 지원합니다.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5">
                  <div className="grid grid-cols-3 gap-6"></div>

                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      제목
                    </label>
                    <div className="mt-1">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        rows={1}
                        className="h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="제목을 입력해 주세요"
                        value={title}
                        onChange={titleChange}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3">
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        모집인원
                      </label>
                      <div className="mt-1">
                        <select
                          z
                          rows={1}
                          className="h-9 mt-1 block w-2/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={limitPeople}
                          onChange={limitPeopleChange}
                        >
                          <option value="" disabled="">
                            인원 선택
                          </option>
                          {list.map((item) => {
                            return (
                              <option key={item} value={item}>
                                {item}명
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        장소
                      </label>
                      <div className="mt-1">
                        <input
                          id="about"
                          name="about"
                          rows={1}
                          className=" h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="모임 장소를 자세히 입력해 주세요"
                          value={location}
                          onChange={locationChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/2">
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        모집 기간
                      </label>
                      <div className="flex mt-1">
                        <input
                          className="h-6 mt-1 mr-2 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          type="date"
                          defaultValue={joinStartDate}
                          onChange={(e) => {
                            nowDate <= orange(e.target.value)
                              ? setJoinStartDate(e.target.value)
                              : swal('현재날짜 이후로만 설정 가능합니다');
                          }}
                        />
                        ~
                        <input
                          className="h-6 ml-2 mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          type="date"
                          defaultValue={joinEndDate}
                          onChange={(e) => {
                            nowDate <= orange(e.target.value)
                              ? setJoinEndDate(e.target.value)
                              : swal('현재날짜 이후로만 설정 가능합니다');
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        활동 기간
                      </label>
                      <div className="flex mt-1">
                        <input
                          className="h-6 mt-1 mr-2 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          type="date"
                          defaultValue={meetingStartDate}
                          onChange={(e) => {
                            nowDate <= orange(e.target.value)
                              ? setMeetingStartDate(e.target.value)
                              : swal('현재날짜 이후로만 설정 가능합니다');
                          }}
                        />
                        ~
                        <input
                          className="h-6 ml-2 mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          type="date"
                          defaultValue={meetingEndDate}
                          onChange={(e) => {
                            nowDate <= orange(e.target.value)
                              ? setMeetingEndDate(e.target.value)
                              : swal('현재날짜 이후로만 설정 가능합니다');
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      내용
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="내용을 입력해 주세요"
                        value={content}
                        onChange={contentChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      태그
                    </label>
                    {tagList?.map((item) => {
                      return (
                        <TagStyle
                          backColor={item.state ? '#3cc2df' : '#f3f4f5'}
                          fontColor={item.state ? '#f3f4f5' : '#3cc2df'}
                          key={item.id}
                          onClick={() => {
                            if (tag.length >= 3 && !item.state) {
                              alert('태그는 3개까지 선택 가능합니다.');
                            } else {
                              if (item.state) {
                                setTag(
                                  tag.filter((id) => {
                                    return id !== item.id;
                                  })
                                );
                              } else {
                                setTag([...tag, item.id]);
                              }
                              item.state = !item.state;
                              setTagList([...tagList]);
                            }
                          }}
                        >
                          {item.name}
                        </TagStyle>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    onClick={(e) => onClickSubmitHandler(e)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-cyan-400 py-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    작성완료
                  </button>
                  <button onClick={onClickGoOut} className="py-2 text-sm text-gray-400">
                    돌아가기
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardCreateForm;

const TagStyle = styled.span`
  padding: 0px 5px;
  font-size: 12px;

  border: 1px solid #f3f4f5;
  border-radius: 20px;
  margin-right: 5px;
  cursor: pointer;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backColor};
`;
