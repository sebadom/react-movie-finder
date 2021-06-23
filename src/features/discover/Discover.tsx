import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { STATUS } from '../../models/status.enum';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { discoverAsync, search, selectMoviesByRanking, selectRate, selectSearchQuery, selectStatus } from '../../store/movies';
import MovieThumb from './MovieThumb/MovieThumb';
import RatingFilter from './RatingFilter/RatingFilter';
import Search from './Search/Search';

function Discover() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const rate = useAppSelector(selectRate);
  const searchToken = useAppSelector(selectSearchQuery);
  const movies = useAppSelector((state) => selectMoviesByRanking(state, rate));
  const history = useHistory();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const onClick = (movieId:number) => {
    history.push(`/movies/${movieId}`);
  };

  useEffect(() => {
    dispatch(discoverAsync())
  }, [dispatch])

  const TailwindStyles = {
    Grid: [
      'grid',
      'grid-cols-1',
      'md:grid-cols-5'
    ].join(' ')
  };

  if (isSearchFocused) {
    TailwindStyles.Grid = TailwindStyles.Grid.concat(' filter blur-sm saturate-50');
  }

  const onFocus = () => setIsSearchFocused(true);
  const onBlur = () => setIsSearchFocused(false);
  const onSearch = (token: string | null) => {
    dispatch(search(token));
  };

  const renderMoviesList = () => {
    switch (status) {
      case STATUS.LOADING:
        return <div>LOADING</div>;
      case STATUS.FAILED:
        return <div>ERROR</div>;
      default:
        if (movies.length > 0) {
          return (
            <div className={TailwindStyles.Grid}>
              {
                movies.map(movie => <MovieThumb movie={movie} key={movie.id} clickHandler={onClick} />)
              }
            </div>
          );
        } else {
          return <div>EMPTY</div>;
        }
        
    }
  };

  const render = () => {
    return (
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 via-pink-900 to-pink-500 min-h-screen">
        <Search queryToken={searchToken} onFocus={onFocus} onBlur={onBlur} onSearch={onSearch} />
        <RatingFilter />
        {renderMoviesList()}
      </div>
    );
    
  }
  
  return (
    <div>
      { render() }
    </div>
  )
}

export default Discover;
