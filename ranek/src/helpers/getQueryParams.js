export default obj => {
  let queryString = '';

  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
};
