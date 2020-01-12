import axios from 'axios';

export const getJedi = async () => {
  try {
    const res = await axios.get('http://localhost:3001/jedi');

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
