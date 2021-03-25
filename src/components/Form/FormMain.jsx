/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, Text, Input, Box } from 'theme-ui';
import axios from 'axios';
import { FlexCol } from '../Components';
import { formFields, blankForm } from './form';
import { FormFooter } from './FormFooter';
import { FormMobile } from './FormMobile';


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
      url: "https://getform.io/f/ea276300-1bb4-4d31-b06b-1dcc8a506e57",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
        console.log('sent')
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
        />
      : <FormFooter
          handleOnSubmit={handleOnSubmit}
          loading={loading}
        />
  );
};

FormMain.displayName = 'FormMain';