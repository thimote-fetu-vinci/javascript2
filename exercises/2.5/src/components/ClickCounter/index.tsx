import { useState } from 'react';
import './ClickCounter.css';

interface ClickCounterProps {
    title: string;
    hoverMessage: string;
    message: string;
}

const ClickCounter = ({ title, hoverMessage, message }: ClickCounterProps) => {
    const [count, setCount] = useState(0)
    const [atLeastTen, setatLeastTen] = useState(false)

    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    const handleClick = () => {
        setCount(count + 1)
        if (count + 1 >= 10) {
            setatLeastTen(true)
        }
    }

    return (
        <div>
            <h2>{title}</h2>
            <h4>{isHover ? hoverMessage : ""}</h4>
            <button onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                count is : {count}
            </button>
            <p>{atLeastTen ? message : ""}</p>
        </div>
    )
};

export default ClickCounter;