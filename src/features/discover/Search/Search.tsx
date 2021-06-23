import { KeyboardEvent, useState } from 'react';

const TailwindStyles = {
  Container: [
    'flex',
    'items-center',
    'p-2',
    'fixed',
    'w-50',
    'z-50',
    'bg-white',
    'inset-x-0',
    'mx-auto',
    'w-2/4',
    'rounded-2xl',
    'mt-2',
    'bg-opacity-70',
    'hover:bg-opacity-100',
    'filter',
    'hover:drop-shadow-compact',
    'transition'
  ].join(' '),
  Input: [
    'appearance-none',
    'bg-transparent',
    'border-none',
    'w-full',
    'text-gray-700',
    'mr-3',
    'py-1',
    'px-2',
    'leading-tight',
    'focus:outline-none'
  ].join(' '),
};

interface Props {
  onFocus: () => void,
  onBlur: () => void,
  onSearch: (token: string | null) => void,
  queryToken: string | null
}


const Search = ({onFocus, onBlur, onSearch, queryToken}: Props) => {
  const [value, setValue] = useState(queryToken || '')

  const captureEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      trigger();
    }
  }

  const trigger = () => {
    onBlur();
    onSearch(value);
  };

  const renderReset = () => {
    if (!!value) {
      return (
        <svg onClick={ () => setValue('') } xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      );
    }
  };

  return (
    <div className={TailwindStyles.Container} onFocus={() => onFocus()} onBlur={() => onBlur()}>
      <input
        className={TailwindStyles.Input}
        value={value}
        type="text"
        placeholder="Search Movie..."
        aria-label="Movie Title"
        onChange={(event) => setValue(event.currentTarget.value)}
        onKeyDown={captureEnter}/>

      { renderReset() }

      <svg onClick={() => trigger() } xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-700 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

export default Search
