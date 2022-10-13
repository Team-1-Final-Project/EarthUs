import React, { useState, useEffect } from 'react';

export default function Sse() {
  const [data, setData] = useState();

  useEffect(() => {
    if (sessionStorage.getItem('id') != null) {
      const id = sessionStorage.getItem('id');
      const sse = new EventSource(id && `http://54.180.116.99/subscribe/${id}`, {
        withCredentials: true,
      });

      // sse.addEventListener('');
      sse.addEventListener('sse', function (e) {
        // var data = JSON.parse(e);
        console.log(e);
      });
      sse.addEventListener('open', function (e) {
        console.log(e.data);
      });
      sse.addEventListener('error', function (e) {
        console.log(e.data);
      });
    }
  }, []);
}
