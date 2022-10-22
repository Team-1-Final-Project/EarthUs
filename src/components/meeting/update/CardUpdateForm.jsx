import { useInput } from 'hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Preview from '../create/Preview';
import { apis } from 'api/api';
import { useEffect } from 'react';
import swal from 'sweetalert';
import styled from 'styled-components';

export const orange = (str) => {
  const a = str.split('-');
  const b = Number(a.join(''));
  return b;
};

const CardUpdateForm = (props) => {
  const navigate = useNavigate();

  const [title, setTitle, titleChange] = useInput('');
  const [tag, setTag, tagChange] = useInput([]);
  const [location, setLocation, locationChange] = useInput('');
  const [limitPeople, setLimitPeople, limitPeopleChange] = useInput('');
  const [joinStartDate, setJoinStartDate, joinStartDateChange] = useInput('');
  const [joinEndDate, setJoinEndDate, joinEndDateChange] = useInput('');
  const [meetingStartDate, setMeetingStartDate, meetingStartDateChange] = useInput('');
  const [meetingEndDate, setMeetingEndDate, meetingEndDateChange] = useInput('');
  const [content, setContent, contentChange] = useInput('');
  const [image, setImage] = useState('');

  useEffect(() => {
    props.detailData && setTitle(props.detailData.title);
    props.detailData && setLocation(props.detailData.location);
    props.detailData && setLimitPeople(props.detailData.limitPeople);
    props.detailData && setJoinStartDate(props.detailData.joinStartDate);
    props.detailData && setJoinEndDate(props.detailData.joinEndDate);
    props.detailData && setMeetingStartDate(props.detailData.meetingStartDate);
    props.detailData && setMeetingEndDate(props.detailData.meetingEndDate);
    props.detailData && setContent(props.detailData.content);
  }, [props.detailData]);

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
  const list = [2, 3, 4, 5, 6, 7, 8];

  //수정완료 버튼 클릭시
  const onChangeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const onClickSubmitHandler = async (e) => {
    e.preventDefault();
    const JSD = orange(joinStartDate);
    const JED = orange(joinEndDate);
    const MSD = orange(meetingStartDate);
    const MED = orange(meetingEndDate);

    let formData = new FormData();
    if (JSD < JED && JED < MSD && MSD <= MED) {
      image ? formData.append('image', image) : formData.append('image', null);
      formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
      await apis
        .updateMeeting(props.params, formData)
        .then((res) => {
          swal(res.data.data);
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
    }
  };

  //나가기버튼 클릭시
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
      <div className="mt-10 text-2xl font-bold text-gray-600 flex justify-center">모임 수정</div>
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
                    ) : props.detailData && props.detailData.meetingImage ? (
                      <img
                        className="h-full w-full"
                        src={props.detailData ? props.detailData.meetingImage : null}
                        alt="meetingImage"
                      />
                    ) : null}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>클릭해서 사진 변경하기</span>
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
          <div className="mt-5 md:col-span-2 md:mt-0 ">
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
                        id="about"
                        name="about"
                        rows={1}
                        className="h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="제목을 입력해 주세요"
                        defaultValue={title}
                        onChange={titleChange}
                        type="text"
                        required
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
                          id="about"
                          name="about"
                          rows={1}
                          className="h-9 mt-1 block w-2/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={props.detailData && props.detailData.limitPeople}
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
                          defaultValue={location}
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
                          onChange={joinStartDateChange}
                        />
                        ~
                        <input
                          className="h-6 ml-2 mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          type="date"
                          defaultValue={joinEndDate}
                          onChange={joinEndDateChange}
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
                          onChange={meetingStartDateChange}
                        />
                        ~
                        <input
                          className="h-6 ml-2 mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          type="date"
                          defaultValue={meetingEndDate}
                          onChange={meetingEndDateChange}
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
                        defaultValue={content}
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
                <div className="px-4 py-3 text-right sm:px-6 flex justify-between flex-row-reverse">
                  <button
                    onClick={(e) => onClickSubmitHandler(e)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-cyan-400 py-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    수정완료
                  </button>
                  {/* <button
                    type="submit"
                    onClick={onClickGoOut}
                    className="inline-flex justify-center rounded-md border border-transparent bg-cyan-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    나가기
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUpdateForm;
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
