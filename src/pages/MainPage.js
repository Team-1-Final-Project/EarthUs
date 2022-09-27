import React, { useState, useEffect } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Dailymission from 'components/Main/Dailymission';
import { apis } from 'api/api';
import TopPost from 'components/Main/TopPost';
import Gather from 'components/Main/Gather';
// import LoginGoogle from 'components/login/LoginGoogle';
import Banner from 'components/banner/Banner';
import Footer from 'components/footer/Footer';
import { GoogleLogin } from '@react-oauth/google';
import LoginGoogle from 'components/login/GoogleLogin';

function MainPage() {
  const [mission, setMission] = useState();
  const [post, setPost] = useState();
  const [gather, setGather] = useState();

  useEffect(() => {
    apis.getMainPage().then((res) => {
      setMission(res[0].mission);
      setPost(res[0].post);
      setGather(res[0].gather);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center w-full">
      <Navbar />
      <LoginGoogle />
      <Banner />
      <Dailymission mission={mission} />
      <TopPost post={post} />
      <Gather gather={gather} />
    </div>
  );
}

export default MainPage;
