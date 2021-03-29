/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import axios from 'axios';
import { FormFooter } from './FormFooter';
import { FormMobile } from './FormMobile';
const getformAPI = process.env.GATSBY_GETFORM_API;


export const FormMain = ({
  mobile = false,
  ...props
}) => {

  const [loading, setLoading] = useState(false);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    setLoading(false);
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: `https://getform.io/f/${getformAPI}`,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
        // console.log('sent')
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    mobile
      ? <FormMobile
          handleOnSubmit={handleOnSubmit}
          loading={loading}
          {...props}
        />
      : <FormFooter
          handleOnSubmit={handleOnSubmit}
          loading={loading}
          {...props}
        />
  );
};

FormMain.displayName = 'FormMain';