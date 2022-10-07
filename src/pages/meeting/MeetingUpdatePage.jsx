import React from 'react';
import CardUpdateForm from 'components/meeting/update/CardUpdateForm';
import HomeButton from 'components/navbar/HomeButton';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apis } from 'api/api';
import { useState } from 'react';

const MeetingUpdatePage = () => {
  let params = useParams().id;
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    apis
      .getMeeting(params)
      .then((res) => {
        setDetailData(res.data.data);
        console.log('success', detailData);
      })
      .catch((err) => console.log('err', err));
  }, []);

  return (
    <Layout>
      <Container>
        <HomeButton />
        <CardUpdateForm detailData={detailData && detailData} params={params} />
      </Container>
    </Layout>
  );
};

export default MeetingUpdatePage;
