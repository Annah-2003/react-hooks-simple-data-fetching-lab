// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch a random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update the state with the dog image URL
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); //  empty  array means this effect runs once after the initial render

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
