import { useState } from 'react';

interface ClickCounterProps {
    title: string;
    message: string;
}

const ClickCounter = ({ title, message }: ClickCounterProps) => {
    const [count, setCount] = useState(0)
    const [atLeastTen, setatLeastTen] = useState(false)

    const handleClick = () => {
        setCount(count + 1)
        if (count + 1 >= 10) {
            setatLeastTen(true)
        }
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={handleClick}>
                count is : {count}
            </button>
            <p>{atLeastTen ? message : ""}</p>
        </div>
    )
};

export default ClickCounter;