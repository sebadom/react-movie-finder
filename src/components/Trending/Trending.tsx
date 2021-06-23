export enum TrendingDirection {
  UP,
  DOWN
};

interface Props {
  direction: TrendingDirection
}

const Trending = ({ direction }: Props) => {
  let d = direction === TrendingDirection.UP ? 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' : 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6';
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
    </svg>
  )
}

export default Trending
