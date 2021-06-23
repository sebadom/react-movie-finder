import { useEffect } from 'react'
import { useHistory } from 'react-router';
import { STATUS } from '../../models/status.enum';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { discoverAsync, selectMovies, selectStatus } from '../../store/movies';
import MovieThumb from './MovieThumb/MovieThumb';

function Discover() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const movies = useAppSelector(selectMovies);
  const history = useHistory();

  const onClick = (movieId:number) => {
    history.push(`/movies/${movieId}`);
  };

  useEffect(() => {
    dispatch(discoverAsync())
  }, [dispatch])

  const renderMoviesList = () => {
    if (movies.length > 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-5">
          {
            movies.map(movie => <MovieThumb movie={movie} key={movie.id} clickHandler={onClick} />)
          }
        </div>
      );
    } else {
      return <div>EMPTY</div>;
    }
  };

  const render = () => {
    switch (status) {
      case STATUS.LOADING:
        return <div>LOADING</div>;
      case STATUS.FAILED:
        return <div>ERROR</div>;
      default:
        return renderMoviesList();
    }
  }
  
  return (
    <div>
      { render() }
    </div>
  )
}

export default Discover;
