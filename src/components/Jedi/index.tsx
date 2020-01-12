import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchJedi } from '../../redux/jedi/actions';
import { IJediState, IJedi } from '../../redux/jedi/types';

const Jedi: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const jedi = useSelector((state: IJediState) => state.jedi);

  React.useEffect(() => {
    dispatch(fetchJedi());
  }, []);

  return (
    <>
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
