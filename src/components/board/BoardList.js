import styled from 'styled-components';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';

const BoardList = () => {
  return (
    <ContainerStyled>
      <TagStyled>태그</TagStyled>
      <TitleStyled>나는 타이틀</TitleStyled>
      <ContentStyled>
        로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를
        담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인 프레젠테이션보다는 텍스트에 담긴
        뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을
        맞추기 위해 로렘 입숨을 사용한다.
      </ContentStyled>
      <div className="iconWrap">
        <AiOutlineLike />
        <span className="count">7</span>
        <AiOutlineComment />
        <span className="count">3</span>
      </div>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 2em;
  padding: 20px;
  border: 1px solid #e9e0f5;
  border-radius: 15px;

  .iconWrap {
    display: flex;
    align-items: center;
    margin-top: 30px;
    font-size: 15px;
    color: #595f63;
  }
  .count {
    margin-right: 10px;
    margin-left: 5px;
  }
`;

const TagStyled = styled.span`
  width: max-content;
  margin-bottom: 15px;
  padding: 0px 10px;
  font-size: 14px;
  color: #595f63;
  background-color: #f3f4f5;
  border: 1px solid #f3f4f5;
  border-radius: 5px;
`;
const TitleStyled = styled.h1`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;
const ContentStyled = styled.span`
  font-size: 14px;
  color: #595f63;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export default BoardList;
