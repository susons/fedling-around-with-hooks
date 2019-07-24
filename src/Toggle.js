import React, { useState, useContext } from 'react';
import { AppContext } from './App';
import { useLockBodyScroll } from './hooks/BodyScroolLock';
import DishForm from './DishForm';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(AppContext);

  if(!userInfo.user) return null;
  return (
    <div>

      {isToggled ?  <DishForm setToggle={setToggle} /> : <button onClick={() => setToggle(!isToggled)}>Open</button>}
      <h2>Hello</h2>
    </div>
  )
}

export default Toggle;

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }