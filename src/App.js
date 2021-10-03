import React ,{useState} from 'react'
import './App.css';
import AddModal from './component/AddModal'
import Navbarr from './component/Navbar/Navbarr';
import { moviesData } from './component/MovieData';
import MovieList from './component/MovieListe';
import { Button } from 'react-bootstrap'



const App = () => {
  const [movies , setMovies]= useState(moviesData)
  const [name , setName]= useState("")
  const [ratingSearch , setRatingSearch]= useState(0)
  const [modalShow, setModalShow] = React.useState(false);

   
  
  return (
    <div className="App">
      <header className="App-header">
       <Navbarr name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} />
      </header>
      <body  className="body" >
        <MovieList movies={movies} name={name} ratingSearch={ratingSearch} />
         
      </body>
      <footer>
         <Button variant="primary" onClick={() => setModalShow(true)} className="button">
        Add a new Movie
      </Button>

      <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </footer>
     
    </div>
  );
}

export default App;
