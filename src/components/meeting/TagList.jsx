import styled from 'styled-components';

const TagList = () => {
  return (
    <TagListLayout>
      <Tagbutton>#성동구</Tagbutton>
      <Tagbutton>#뚝섬유원지</Tagbutton>
      <Tagbutton>#홍대입구</Tagbutton>
      <Tagbutton>#플로깅</Tagbutton>
      <Tagbutton>#합정역6번출구</Tagbutton>
      <Tagbutton>#건대2번출구</Tagbutton>
      <Tagbutton>#어린이대공원</Tagbutton>
      <Tagbutton>#아차산역</Tagbutton>
      <Tagbutton>#군자동파출소</Tagbutton>
      <Tagbutton>#성수역1번출구</Tagbutton>
      <Tagbutton>#자양4동주민센터</Tagbutton>
    </TagListLayout>
  );
};

export default TagList;

const TagListLayout = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
`;

export const Tagbutton = styled.button`
  padding: 0px 10px;
  height: 30px;
  color: white;
  background-color: #059df6; //서테이트로 클릭시 색깔 변경하믄 됨니데이
  border-radius: 40px;
  margin: 6px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.07);
  }
`;
