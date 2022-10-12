import React, { useState, useEffect } from 'react';

export default function Sse() {
  const [data, setData] = useState();

  const id = 6;
  useEffect(() => {
    const sse = new EventSource(`http://3.37.61.61/subscribe/${id}`, { withCredentials: true });

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
    return () => {
      sse.close();
    };
  });
  return <div>Sse</div>;
}
