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
  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (loading || submitted) return;
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
          submitted={submitted}
          {...props}
        />
      : <FormFooter
          handleOnSubmit={handleOnSubmit}
          loading={loading}
          submitted={submitted}
          {...props}
        />
  );
};

FormMain.displayName = 'FormMain';