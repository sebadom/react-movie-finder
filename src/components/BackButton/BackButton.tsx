import { Link } from "react-router-dom"

interface Props {
  to: string
}

export const BackButton = ({ to }: Props) => {
  return (
    <Link to={to} className="flex flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-pink-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
      Back
    </Link>
  )
}
