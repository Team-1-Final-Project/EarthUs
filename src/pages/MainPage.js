import React, { useState, useEffect } from 'react';
import Navbar from 'components/Navbar/ Navbar';
import Dailymission from 'components/Dailymission/Dailymission';
import { apis } from 'api/api';
import TopPost from 'components/Post/TopPost';

function MainPage() {
  const [mission, setMission] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    apis.getMainPage().then((res) => {
      setMission(res[0].mission);
      setPost(res[0].post);
    });
  }, []);

  return (
    <div c>
      <Navbar />
      <Dailymission mission={mission} />
      <div></div>
      <TopPost post={post} />
    </div>
  );
}

export default MainPage;
