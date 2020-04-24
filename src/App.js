import React from 'react';
import './App.css';
import MovieItem from './components/MovieItem';


const movie = {
  image: "https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg",
  title: "Crazy days",
  average: 8.5,
}
function App() {
  {/*const movie = {
    image: "https://lh3.googleusercontent.com/proxy/OHOSfCXD0nI-WwURAT6ij0z-R-CYFPI9R3epY9WIKnHp05_GA69_pHfFkOoH5S05jhgfv740kIC6mJw8lTeFg1s_ITzXTKQAe8htEw",
    title: "Crazy days",
    average: 8.5,
  };*/}
  return (
    <div className="App">
     
     
     <MovieItem data={movie} />
    </div>
  );
}

export default App;
