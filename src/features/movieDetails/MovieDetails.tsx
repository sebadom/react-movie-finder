import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { BackButton } from '../../components/BackButton/BackButton';
import Trending, { TrendingDirection } from '../../components/Trending/Trending';
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

  const renderVoteAverage = () => {
    let result = null;
    let trending: TrendingDirection;
    
    if (!!activeMovie?.vote_average) {
      trending = activeMovie?.vote_average > 5 ? TrendingDirection.UP : TrendingDirection.DOWN;
      
      result = (
        <Trending direction={trending} />
      );
    }

    return (
      <div>
        <p className="flex flex-row space-x-1.5 items-center">
          <strong className="font-open bold text-lg">Voting</strong>
          { result }
          <span>{activeMovie?.vote_average ? activeMovie?.vote_average : 'N/A'}</span>
        </p>
      </div>
    );

  }
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

            {renderVoteAverage()}
            
          
            <BackButton to="/"/>
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
