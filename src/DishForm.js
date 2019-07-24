import React, { useRef } from 'react';
import { useLockBodyScroll } from './hooks/BodyScroolLock';
import useOnClickOutside from './hooks/useOnClickOutside';


const DishForm = ({ setToggle }) => {
  useLockBodyScroll();
  const ref = useRef();
  useOnClickOutside(ref, () => setToggle(false));
  return (
    <div className='dish-card' ref={ref}>
      <form>
        <div className='form-row'>
          <label htmlFor='name'> Name: </label>
          <input type='text' id='name'></input>
        </div>
      </form>
    </div>
  )
};

export default DishForm;
