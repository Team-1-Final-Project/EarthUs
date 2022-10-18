import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Sse() {
  const id = sessionStorage.getItem('id');
  useEffect(() => {
    if (sessionStorage.getItem('id') != null) {
      const sse = new EventSource(id && `http://54.180.116.99/subscribe/${id}`, {
        withCredentials: true,
      });

      sse.addEventListener('message', function (e) {
        const data = JSON.parse(e.data);
        toast('😍 ' + data.content, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
      // sse.addEventListener('connect', function (e) {});
      // sse.addEventListener('error', function (e) {});
    }
  });
}
