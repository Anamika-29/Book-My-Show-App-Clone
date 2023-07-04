import React,{useState} from 'react';

const MovieDetails = ({movie,setView}) => {
  console.log(1,movie)

  const [showPrompt, setShowPrompt] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [proceed,setProceed] = useState(false);

  

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleProceed = () => {
    console.log('Selected Language:', selectedLanguage);
    console.log('Selected Format:', selectedFormat);
    setShowPrompt(false);
  };

  const handleBookTicket = () => {
    const selectedLanguage = prompt(`Select Language: (${movie.Language.join(', ')}):`, movie.Language.join(', '));
    const selectedFormat = prompt(`Select Format: (${movie.format}):`, movie.format);
    if (selectedLanguage && selectedFormat) {
      setView();
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${movie.Poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='row'>
          <div className='col-4'>
            <img src={movie.Poster} alt={movie.title} width='100%' height='500vh' />
          </div>
          <div className='col-8 text-white'>
            <h2>{movie.title}</h2>
            <div className='row'>
              <div className='col-6 bg-dark text-white'>
                <h5>Add your ratings and review</h5>
                Your ratings matter
                <button className='bg-light btn btn-sm' style={{ marginLeft: '200px', marginBottom: '5px' }}>
                  Rate Now
                </button>
              </div>
            </div>
            <button className='btn bg-light m-2'>{movie.format}</button>
            <button className='btn bg-light m-2'>{movie.Language.join(',')}</button>
            <br />
            {movie.Genre.join(',')}
            <br />
            <button className='btn btn-danger m-2' onClick={handleBookTicket}>
              Book Tickets
            </button>
          </div>
        </div>
      </div>
      <h5>About the Movie</h5>
      {movie.about}
      
      
      {showPrompt && (
        <div>
          <h5>Select Language:</h5>
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value=''>Select Language</option>
            {movie.Language.map((language) => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
          <h5>Select Format:</h5>
          <select value={selectedFormat} onChange={handleFormatChange}>
            <option value=''>Select Format</option>
            {movie.format}
          </select>
          <button className='btn btn-primary' onClick={handleProceed}>
            Proceed
          </button>
        </div>
      )}
      
    </div>
  );
};

export default MovieDetails;

