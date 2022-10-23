import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { apis } from 'api/api';
import { useNavigate } from 'react-router-dom';
import Preview from '../create/Preview';
import swal from 'sweetalert';

const ReviewUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [newImage, setNewImage] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    apis
      .getMeetingReview(Number(params.id))
      .then((res) => {
        setContent(res.data.data.content);
        setImage(res.data.data.reviewImage);
      })
      .catch((err) => console.log(err));
  }, []);

  const onUpdateHandler = async (e) => {
    e.preventDefault();
    if (content === '') {
      toast.error('내용이 비어있습니다.');
      return;
    }

    let formData = new FormData();

    const data = {
      content: content,
    };

    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));

    if (newImage !== '') {
      formData.append('image', newImage);
    }

    try {
      await apis.updateMeetingReview(Number(params.id), formData);
      navigate(`/review/detail/${params.id}`);
    } catch (err) {
      console.log(err);
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
          navigate(`/review/detail/${Number(params.id)}`);
          break;

        default:
          break;
      }
    });
  };

  return (
    <div className="mt-20 flex justify-center">
      <div className="w-5/6 md:grid md:grid-cols-3 md:gap-6 ">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">모임후기</h3>
            <div className="h-full">
              <label className="mt-10 block text-sm font-medium text-gray-700">사진 등록</label>
              <div className="mt-1 h-full flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center flex flex-col items-center justify-center">
                  {image ? (
                    newImage ? (
                      <Preview img={newImage} />
                    ) : (
                      <img src={image} alt="reviewImage" />
                    )
                  ) : newImage ? (
                    <Preview img={newImage} />
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
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="image"
                        type="file"
                        className="sr-only"
                        onChange={(e) => setNewImage(e.target.files[0])}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0 ">
          <form>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  내용
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-1 p-2 block w-full h-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="내용을 입력해 주세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-between">
                <button
                  type="submit"
                  onClick={(e) => onClickGoOut(e)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-cyan-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  나가기
                </button>
                <button
                  onClick={(e) => onUpdateHandler(e)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-cyan-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  작성완료
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewUpdate;
