import { IMovie } from '../../../models/movie.interface'

interface Props {
  movie: IMovie,
  clickHandler: (id: number)  => void
}

const TailwindStyles = {
  Thumb: [
    'box-border',
    'cursor-pointer',
    'filter',
    'saturate-50',
    'contrast-75',
    'hover:saturate-100',
    'hover:contrast-100',
    'hover:drop-shadow-compact',
    'transform',
    'hover:scale-110',
    'hover:z-10',
    'transition',
    'flex',
    'bg-gray-500'
  ].join(' '),
  Img: [
    'object-cover',
    'object-center',
    'flex-1'
  ].join(' '),
  Title: [
    'self-center',
    'mx-auto',
    'text-4xl',
    'text-gray-900',
    'w-4/5'
  ].join(' ')
};

const renderImage = (movie: IMovie) => {
  if (!!movie.poster_path) {
    return (
      <img
        className={TailwindStyles.Img}
        alt="Poster"
        src={ 'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
    );
  } else {
    return (
      <h2 className={TailwindStyles.Title}>
        {movie.title}
      </h2>
    );
  }
} 

const MovieThumb = ({ movie, clickHandler }: Props) => {
  return (
    <div
      onClick={() => clickHandler(movie.id)} 
      attr-id={movie.id}
      className={TailwindStyles.Thumb}>
      {renderImage(movie)}
    </div>
  )
}

export default MovieThumb
