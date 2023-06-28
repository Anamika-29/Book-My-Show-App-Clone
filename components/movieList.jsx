import React, { useEffect, useState } from 'react';
import MovieDetails from './movieDetails';
import axios from 'axios';

const MovieList = ({ location, searchValue,setSearchValue,setMainView }) => {
  const [movies, setMovies] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [view,setView] = useState(0);

  // Fetch movies data from the server based on the location
  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${location}`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [location]);

  // Extract unique values for languages, genres, and formats
  const uniqueLanguages = ["English","Hindi","Marathi","Telugu"];
  const uniqueGenres = [...new Set(movies.flatMap((movie) => movie.genre))];
  const uniqueFormats = ["2D","3D","IMAX"];

  // Filter movies based on selected language, genre, format, and search value
  const filteredMovies = movies.filter((movie) => {
    const matchesLanguage = selectedLanguage ? movie.lang.includes(selectedLanguage) : true;
    const matchesGenre = selectedGenre ? movie.genre.includes(selectedGenre) : true;
    const matchesFormat = selectedFormat ? movie.format.includes(selectedFormat) : true;
    const matchesSearchValue = searchValue ? movie.title.toLowerCase().includes(searchValue.toLowerCase()) : true;
    return matchesLanguage && matchesGenre && matchesFormat && matchesSearchValue;
  });

  // Clear all the filters
  const clearFilters = () => {
    setSelectedLanguage('');
    setSelectedGenre('');
    setSelectedFormat('');
    setSearchValue('');
  };

  const changeView = (movie) => {
    setSelectedMovie(movie);
    setView(1);
    setMainView(1);
  }

  return (
    <div style={{ marginLeft: '150px', marginRight: '150px' }}>
      {view===0 ?
      <div className="row">
        <div className="col-3">
        <div className="dropdown mb-3">
  <label htmlFor="languageDropdown" className="form-label">Language:</label>
  {selectedLanguage && (
      <button className="btn btn-clear bg-primary btn-sm" onClick={() => setSelectedLanguage('')}>
        Clear
      </button>
    )}
  <div className="btn-group" role="group">
    {uniqueLanguages.map(language => (
      <button
        key={language}
        className={`btn ${selectedLanguage === language ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setSelectedLanguage(language)}
      >
        {language}
      </button>
    ))}
  </div>
</div>


<div className="dropdown mb-3">
  <label htmlFor="genreDropdown" className="form-label">
    Genre:
    {selectedGenre && (
      <button className="btn btn-clear bg-primary btn-sm" onClick={() => setSelectedGenre('')}>
        Clear
      </button>
    )}
  </label>
  <div className="btn-group" role="group">
    <div className='row'>
    {uniqueGenres.map(genre => (
      <button
        key={genre}
        className={`btn ${selectedGenre === genre ? 'btn-primary col-3 m-2' : 'btn-outline-primary col-3 m-2'}`}
        onClick={() => setSelectedGenre(genre)}
      >
        {genre}
      </button>
    ))}
    </div>
    
  </div>
</div>

<div className="dropdown mb-3">
  <label htmlFor="formatDropdown" className="form-label">
    Format:
    {selectedFormat && (
      <button className="btn btn-clear bg-primary btn-sm" onClick={() => setSelectedFormat('')}>
        Clear
      </button>
    )}
  </label>
  <br></br>
  <div className="btn-group" role="group">
    {uniqueFormats.map(format => (
      <button
        key={format}
        className={`btn ${selectedFormat === format ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setSelectedFormat(format)}
      >
        {format}
      </button>
    ))}
  </div>
</div>


          {/* Button to clear filters */}
          <button className="btn btn-secondary" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

        <div className="col-9">
          <div className="row">
            <h3>New Releases</h3>
            
            {filteredMovies.map(movie => (
              <div className="col-md-3" key={movie.id} onClick={() => changeView(movie)}>
                <div className="card mb-3">
                  <img
                    src={movie.image}
                    className="card-img-top movie-image"
                    alt={movie.title}
                    height="250vh"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.genre.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> : <MovieDetails movie={selectedMovie} setView={setMainView} />}
    </div>


  );
};

export default MovieList;


