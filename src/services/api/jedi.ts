import axios from 'axios';

export const getJedi = async () => {
  try {
    const res = await axios.get('http://localhost:3001/jedi');

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const newJedi = async (jedi: any) => {
  try {
    const res = await axios.post('http://localhost:3001/jedi', {
      name: jedi,
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
