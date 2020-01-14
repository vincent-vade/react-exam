import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchJedi, addJedi } from '../../redux/jedi/actions';
import { IJediState, IJedi } from '../../redux/jedi/types';
import { useState } from 'react';

const Jedi: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const jedi = useSelector((state: IJediState) => state.jedi);

  const [name, setName] = useState<string>('');

  React.useEffect(() => {
    dispatch(fetchJedi());
  }, []);

  const onAdd = (e: any) => setName(e.target.value);

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addJedi(name));
    dispatch(fetchJedi());
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input placeholder="add jedi" onChange={onAdd} />
        <button type="submit">dede</button>
      </form>
      {jedi.length &&
        jedi.map((jedi: IJedi, index) => (
          <div key={index}>
            Jedi: id: {jedi.id} name: {jedi.name}
          </div>
        ))}
    </>
  );
};

export default Jedi;
