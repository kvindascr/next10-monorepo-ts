import React, {useState} from 'react';
import { sum } from '@test/common';

export const SumButton: React.FC = (props) => {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => setCount(count + 1);
    return (<div>N + 5 / n: {count} / sum: { sum(count, 5)} <button onClick={handleClick} >Sum 1</button></div>);
}

