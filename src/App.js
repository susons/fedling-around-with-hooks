import React, { useState, useEffect, useRef, createContext, useMemo, useDebugValue  } from 'react';
import Toggle from './Toggle';
import Counter from './Counter';
import { useTitleInput } from './hooks/UseTitleInput';
import useAbortableFetch from 'use-abortable-fetch'
import { useSpring, animated } from 'react-spring'
export const AppContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const [dishes, setDishes] = useState([]);

  const { data, loading } = useAbortableFetch('http://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')

  const fetchDishes = async () => {
    console.log('ran')
    console.log('Function called')
    const res = await fetch('http://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    const data = await res.json();
    setDishes(data);
  }

  useEffect(() => {
    fetchDishes();
    // fetchDishes(); mignt want to use second parameter;
  }, [name]); // essentially makes componentDidMount

  const ref = useRef();

  const reverseWord = (word) => {
    return word.split("").reverse().join("");
  }
  const title = 'Level Up Dishes';
  const TitleReversed = useMemo(() => reverseWord(name), [name])

  const props = useSpring({ opacity: 1, from : { opacity: 0} });

  return (
    <AppContext.Provider value={{user: true}}>
    <Counter />
      <div className="main-wrapper" ref={ref}>
        <animated.h1 style={props} onClick={() => ref.current.classList.add('njop')}>Level Up Dishes</animated.h1>
        <Toggle />
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
        {TitleReversed}
          <input type="text" onChange={e => setName(e.target.value)} value={name} />
          <button>Submit</button>
        </form>
        {data && data.map(dish => (
          <article className='dish-card dish-card--withImage'>
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className='ingredients'>{dish.ingredients.map((item) => (
              <span>{item}</span>
            ))}</div>
          </article>
        ))}
      </div>
    </AppContext.Provider>
  );
};


export default App;
