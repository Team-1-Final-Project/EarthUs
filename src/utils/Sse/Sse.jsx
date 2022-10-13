import React, { useState, useEffect } from 'react';

export default function Sse() {
  const [data, setData] = useState();

  useEffect(() => {
    const id = sessionStorage.getItem('id');

    const sse = new EventSource(id && `http://54.180.116.99/subscribe/${id}`, {
      withCredentials: true,
    });

    function handleStream(e) {
      console.log(e);
      setData(e);
    }
    sse.onmessage = (e) => {
      handleStream(e);
    };
    sse.onerror = (e) => {
      sse.close();
    };
    // return () => {
    //   sse.close();
    // };
  });
}
