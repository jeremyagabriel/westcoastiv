export const useFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  // console.log('form', form)
  setServerState({ submitting: true });
  axios({
    method: "post",
    url: "https://getform.io/f/ea276300-1bb4-4d31-b06b-1dcc8a506e57",
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