import Url from '../utility/url';

export const questionListData = () => {
  var requestOptions = {
    method: 'POST',
  };

  return fetch(Url.url + '1c5dd4f7-8b4e-40b2-84c7-d7d6ab447808', requestOptions)
    .then(response => response.text())
    .then(result => {
      return JSON.parse(result);
    })
    .catch(error => console.log('error', error));
};
