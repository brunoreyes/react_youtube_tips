import React from 'react';
import './App.css';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
    </div>
  );
}

export default App;

function solution(A) {
  // only sorting positive values
  A = A.filter((highestNumber) => highestNumber >= 1).sort((a, b) => a - b);

  // highest number for negative values = 1
  let highestNumber = 1;

  for (let i = 0; i < A.length; i++) {
    if (highestNumber < A[i]) {
      return highestNumber;
    }
    highestNumber = A[i] + 1;
  }
  return highestNumber;
}

// console.log('testing solution([2,3,4]',solution([2,3,4]))  //1
console.log('testing solution([1,3,4]', solution([1, 3, 4])); //2
console.log('testing solution([-1,0,1]', solution([-1, 0, 1])); //2
console.log('testing solution([-1,-2,-3]', solution([-1, -2, -3])); //1
console.log('testing solution([-1,0,1,2,3]', solution([-1, 0, 1, 2, 3])); //2
console.log('testing solution([1,2,3,4])');
