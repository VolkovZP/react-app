import configs from '../configs';
const { BASE_URI, API_KEY, DEFAULT_USER, DEFAULT_AMOUT } = configs;
/**
 *
 * @param {object} options
 * @returns {Promise}
 */

export const getUsers = async (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: 'json',
    results: DEFAULT_AMOUT,
    seed: API_KEY,
    inc: DEFAULT_USER,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };
  const query = new URLSearchParams(finalOptions).toString();
  //get sring page=1&format=json&results=10&seed=fm2021-1&inc=name%2Cemail%2Cgender%2Clogin%2Cpicture
  const data = await fetch(`${BASE_URI}/?${query}`);
  return await data.json();
};
