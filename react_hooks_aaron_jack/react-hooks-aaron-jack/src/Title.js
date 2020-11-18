import React, { useState, useEffect } from 'react';

// useState

// useState is a hook that returns two values in a twople which is an array of size two
// useState takes the first value we give it, in this case it is the initialState/'my title'
// it assigns the initialState to the first variable which is state/title

// The second variable in the twople, setState/updateTitle is extracted & destructured and is a function
// Everytime setState/updateTitle is called, we are updating the value of state/title

// state/title would be referred to this.state.title, and would act like a state variable.

// setstate/updateTitle is a function that preforms a this.setState on state/title, changing it's state.

//  setstate/updateTitle is the equivalent of this.setState({title: newNameofTitle})

export default function Title() {
  // const [state, setstate] = useState(initialState)
  const [title, updateTitle] = useState('my title');
  // here we are creating a dynamic input value
  const [inputVal, updateInput] = useState(' ');

  // here we are creating a list using hooks
  const [list, updateList] = useState([]);

  // useEffect

  // we call useEffect by putting it in the body of the function component and it will run when the component mounts
  // and it will automatically run once

  useEffect(() => {
    console.log('effect ran');
    //   effect; // first argument is a function
    return () => {
      // cleanup;
    };
  }, [list, inputVal]); // second argument is an array [input] (can be empty), of listeners of state variables
  //  so only when I input, the effect runs, so the effect could run if the array was [list] and
  //  I inputed something and pressed click me

  // Additionally the array can contain multiple values like [list, inputVal] now when anything is typed into
  // the input section or anything is added to the list, useEffect will run

  return (
    <div>
      <h3>{title}</h3>
      <input
        type="text"
        value={inputVal}
        onChange={(event) => updateInput(event.target.value)}
      ></input>

      <button
        onClick={() => {
          updateList([...list, inputVal]);
          updateInput(''); // here i'm calling update input and clearing the function after sending
          //   the inputted value to the list, making sure user doesn't need to clear the input
        }}
      >
        Click Me
      </button>
      {/* here we are spreading the values (...list) of the old list(possibly empyty)
                            and appending a new input value (inputVal) 
                            to the end of the list, therefore updating it */}
      {list.map((item, i) => (
        <div key={i}>{item}</div>
      ))}

      {/* <button onClick={() => updateTitle(inputVal)}>Click Me</button> */}
      {/* here by setting the title using the function update Title, you are using useState to change
            the value of the title*/}
      {/* now we are using a useState again this time changing the name of the title to what's input */}
    </div>
  );
}
