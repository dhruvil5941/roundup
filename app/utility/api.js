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

export const portfolioListData = () => {
  var requestOptions = {
    method: 'POST',
  };
  return fetch(Url.url + '377d7f52-58b8-4281-8e69-f0ca796bb377', requestOptions)
    .then(response => response.text())
    .then(result => {
      return JSON.parse(result);
    })
    .catch(error => console.log('error', error));
};

export const homeData = () => {
  var requestOptions = {
    method: 'POST',
  };
  return fetch(Url.url + 'bc446207-813f-4c7a-9068-f9921c2c918c', requestOptions)
    .then(response => response.text())
    .then(result => {
      return JSON.parse(result);
    })
    .catch(error => console.log('error', error));
};

export const transactionData = () => {
  var requestOptions = {
    method: 'POST',
  };
  return fetch(Url.url + '89fa1568-0d3c-40e5-9c46-ac4de216cac6', requestOptions)
    .then(response => response.text())
    .then(result => {
      return JSON.parse(result);
    })
    .catch(error => console.log('error', error));
};
