import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardCreateForm = () => {
  const navigate = useNavigate();
  const onClickGoOut = (e) => {
    if (window.confirm('작성한 내용이 사라집니다. 그래도 나가시겠습니까?')) {
      navigate('/gathering');
    } else {
      return e.preventDefault();
    }
  };
  return (
    <StyledLayout>
      <ImgDiv>
        <ImgUploader htmlFor="imgInput">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"></path>
          </svg>
          <span>사진 올리기</span>
        </ImgUploader>
      </ImgDiv>
      <StyledForm>
        <WideDivInForm>
          <StyledH1>제목</StyledH1>
          <WideInput />
        </WideDivInForm>
        <WideDivInForm>
          <StyledH1>장소</StyledH1>
          <WideInput />
        </WideDivInForm>
        <DivInForm>
          <StyledH1>인원</StyledH1>
          <StyledOption>
            <option value="" disabled="">
              인원 선택
            </option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5">5명</option>
            <option value="6">6명</option>
            <option value="7">7명</option>
            <option value="8">8명</option>
          </StyledOption>
        </DivInForm>
        <DivInForm>
          <StyledH1>모집 기간</StyledH1>
          <DivForDate>
            <SmallInput type="date" /> ~
            <SmallInput type="date" />
          </DivForDate>
        </DivInForm>
        <DivInForm>
          <StyledH1>활동 기간</StyledH1>
          <DivForDate>
            <SmallInput type="date" /> ~
            <SmallInput type="date" />
          </DivForDate>
        </DivInForm>
        <WideDivInForm2>
          <StyledH1>내용</StyledH1>
          <ContentInput />
        </WideDivInForm2>
        <ButtonDiv>
          <Button onClick={() => onClickGoOut()}>나가기</Button>
          <Button>제출 하기</Button>
        </ButtonDiv>
      </StyledForm>
    </StyledLayout>
  );
};

export default CardCreateForm;

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem 7rem;
  display: flex;
  flex-wrap: wrap;
  border: 40px;
  color: #333;
`;

const ImgDiv = styled.div`
  width: 35%;
`;

const ImgUploader = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: rgb(130, 140, 148);
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(247, 248, 250);
  border: 1px dashed rgb(218, 220, 224);
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  width: 60%;
  background-color: #efeded;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const WideDivInForm = styled.div`
  height: 12%;
  width: 100%;
  margin-left: 40px;
`;
const WideDivInForm2 = styled.div`
  height: 40%;
  width: 100%;
  margin-left: 40px;
  margin-top: 10px;
`;
const DivInForm = styled.div`
  margin-left: 40px;
  margin-top: 10px;
`;

const DivForDate = styled.div`
  display: flex;
`;
const StyledH1 = styled.h1`
  margin-left: 10px;
  margin-bottom: 10px;
`;
const WideInput = styled.input`
  width: 40em;
  height: 30px;
  background-color: white;
  margin: 1%;
  border-radius: 20px;
  padding-left: 20px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.02);
  }
`;

const ContentInput = styled.input`
  width: 40em;
  height: 70%;
  background-color: white;
  margin: 1%;
  border-radius: 20px;
  padding-left: 20px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.01);
  }
`;

const SmallInput = styled.input`
  width: 200px;
  height: 30px;
  background-color: white;
  margin: 4px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.02);
  }
`;

const StyledOption = styled.select`
  width: 200px;
  height: 30px;
  background-color: white;
  margin: 4px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.02);
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  padding-right: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 0px 10px;
  height: 30px;
  width: 100px;
  color: white;
  background-color: #a5a5a6; //서테이트로 클릭시 색깔 변경하믄 됨니데이
  border-radius: 40px;
  margin-right: 20px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.05);
  }
  float: right;
`;
