import { useState } from "react";
import Star from "../../../components/Star/Star"
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { rate, selectRate } from "../../../store/movies";

const TailwindStyles = {
  Container: [
    'fixed',
    'z-50',
    'bg-white',
    'flex',
    'flex-row',
    'p-2.5',
    'rounded-xl',
    'bg-opacity-70',
    'bottom-2.5',
    'right-2.5',
    'hover:bg-opacity-100',
    'filter',
    'hover:drop-shadow-compact',
    'transition'
  ].join(' ')
};

const RatingFilter = () => {
  const dispatch = useAppDispatch();
  const rateValue = useAppSelector(selectRate);
  const [intendedRate, setintendedRate] = useState<number | null>(null)
  
  const onHover = (value: number): void => {
    setintendedRate(value);
  };

  const onClick = (value: number): void => {
    const selectedRate = value === rateValue ? null : value;
    dispatch(rate(selectedRate));
  };

  return (
    <div className={TailwindStyles.Container}>
      <span className="mr-2">filter by rating</span>
      
      {[2,4,6,8,10].map((val, index) => {
        return (
          <Star
            hover={onHover}
            out={() => setintendedRate(null)}
            click={onClick}
            value={val}
            filled={(rateValue || intendedRate) ? val <= (rateValue || intendedRate)! : null}
            grayed={intendedRate ? val <= intendedRate : null}
            key={index}
          />
        );
      })}
    </div>
  )
}

export default RatingFilter
