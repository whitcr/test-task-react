import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://664329473c01a059ea21bf05.mockapi.io/',
});

export const getCards = async () => {
  const { data } = await instance('advert');
  return data;
};

export const getCard = async id => {
  const { data } = await instance(`advert/${id}`);
  return data;
};
