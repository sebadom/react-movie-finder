interface Props {
  filled: boolean | null,
  grayed: boolean | null,
  value: number,
  click: (rate: number) => void
  hover: (rate: number) => void
  out: () => void
}

const Star = ({ filled = false, grayed = false, click, hover, out, value }: Props) => {
  let className = `cursor-pointer text-pink-${grayed ? 300 : 700} ${filled ? 'h-6 w-6' : 'h-6 w-6'}`,
      fillAttr = filled ? 'currentColor' : 'none',
      strokeAttr = filled ? undefined : 'currentColor';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={() => hover(value)}
      onMouseOut={() => out()}
      onClick={() => click(value)}
      className={className}
      fill={fillAttr}
      viewBox="0 0 24 24"
      stroke={strokeAttr} >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

export default Star
