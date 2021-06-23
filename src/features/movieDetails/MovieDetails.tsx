import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { STATUS } from '../../models/status.enum';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadMovieAsync, selectActiveMovie, selectStatus } from '../../store/movies';

type MovieDetailsParams = {
  movieId: string,
}

const TailwindStyles = {
  Container: [
    'grid',
    'grid-cols-2',
    'gap-0.5',
    'w-10/12',
    'mx-auto',
    'bg-white',
    'filter',
    'drop-shadow-2xl'
  ].join(' '),
  Img: [],
  Text: {
    Wrapper: [
      'space-y-10',
      'font-lato',
      'pt-8'
    ].join(' '),
    Title: [
      'text-5xl',
      'font-open',
      'antialiased',
      'italic'
    ].join(' ')
  }
}

const MovieDetails = () => {
  let { movieId } = useParams<MovieDetailsParams>();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const activeMovie = useAppSelector(selectActiveMovie);

  useEffect(() => {
    dispatch(loadMovieAsync(Number(movieId)))
  }, [dispatch, movieId])

  const renderMovieDetails = () => {
    const backgroundStyle: React.CSSProperties = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${ activeMovie?.backdrop_path })`
    };

    return (
      <div style={backgroundStyle} className="bg-cover">
        <div className={TailwindStyles.Container}>
          <div>
            <img alt={activeMovie?.title} src={ 'https://image.tmdb.org/t/p/w500/' + activeMovie?.poster_path } />
          </div>
          <div className={TailwindStyles.Text.Wrapper}>
            <h1 className={TailwindStyles.Text.Title}>{activeMovie?.title}</h1>
            <p>{activeMovie?.overview}</p>
            <p>{activeMovie?.popularity}</p>
          
            <div>
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
              </Link>
              Back
            </div>
          </div>
        </div>
      </div>
    );
  };

  const render = () => {
    switch (status) {
      case STATUS.LOADING:
        return <div>LOADING</div>;
      case STATUS.FAILED:
        return <div>ERROR</div>;
      default:
        return !!activeMovie ? renderMovieDetails() : null;
    }
  }

  return (
    <div>
      { render() }
    </div>
  )
}

export default MovieDetails
