import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


var stuff = [10,34,56,67,93,120,137]
var random_value=stuff[Math.floor(Math.random()*14)];
for (var i=0;i<stuff.length;i++){
  if (stuff[i]===random_value){
    console.log(i + "that's it");
  }
}

// checking easy case 
if (random_value===stuff[1]){
  console.log(i + "that's the first one!");
}

else{
const m = Math.round(stuff.length/2);


}