import history from './history';

//toggles unique values in array 
export const toggleUniqInArray = (element, array) => {
  if(array.includes(element)) {
    const newArray = array.filter(piece => piece !== element);
    return newArray;
    
  } 

  const newArray = [...array, element ];
  return newArray; 
}

//submits form to server
export const submitContact = async (value) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(value) || null,
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if(!response) {
    return console.log('something went wrong');
  }

  history.push('/thanks');
}