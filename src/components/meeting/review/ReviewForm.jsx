import React, { useState } from 'react';
import Preview from '../create/Preview';
import { toast } from 'react-toastify';
import { apis } from 'api/api';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import styled from 'styled-components';

const ReviewForm = () => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const params = useParams().id;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (content === '') {
      toast.error('내용이 비어있습니다.');
      return;
    }

    let formData = new FormData();

    const data = {
      content: content,
    };

    formData.append('image', image);
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));

    try {
      await apis.addMeetingReview(params, formData);
      navigate('/review?page=1');
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
          navigate(-1);
          break;

        default:
          break;
      }
    });
  };

  return (
    <ContainerStyled>
      <AddImgFormStyle>
        <div className="mt-10 text-2xl font-bold text-gray-600 flex justify-center">모임후기</div>

        <div className="mt-5 h-full flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
          <div className="w-full space-y-1 text-center flex flex-col items-center justify-center">
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
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>
          </div>
        </div>
      </AddImgFormStyle>
      <AddReviewFormWrapStyle>
        <AddReviewFormStyle>
          <LabelStyle htmlFor="about">내용</LabelStyle>

          <textarea
            id="about"
            name="about"
            rows={3}
            className="mt-1 p-2 block w-full h-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="내용을 입력해 주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </AddReviewFormStyle>
        <div className="flex flex-col items-center">
          <button
            onClick={(e) => onSubmitHandler(e)}
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-cyan-400 py-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            작성완료
          </button>
          <button
            type="submit"
            onClick={(e) => onClickGoOut(e)}
            className="py-2 text-sm text-gray-400"
          >
            뒤로가기
          </button>
        </div>
      </AddReviewFormWrapStyle>
    </ContainerStyled>
  );
};

export default ReviewForm;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  align-items: center;
  margin: auto;
`;

const AddReviewFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 20px 16px;
`;

const AddReviewFormWrapStyle = styled.div`
  width: 100%;
`;
const AddImgFormStyle = styled.div`
  width: 100%;
`;

const LabelStyle = styled.label`
  font-size: 14px;
  color: #333;
  margin-top: 15px;
  .select-info {
    color: #ccc;
    font-size: 14px;
  }
`;
