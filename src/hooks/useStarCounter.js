import star from '../assets/star.png';
import React from 'react';
import { useState } from 'react';

function useStarCounter(initialValue) {
    const [count, setCount] = useState(0)
    const [stars, setStars] = useState([])
    const onIncreaseChangeHandler = (e) => {

        setCount(count + 1)
        if (count > 5 || count === 6) {
            setCount(5)
        }

        const arr = []
        for (let i = 0; i < count + 1; i++) {

            arr.push("");


        }
        setStars(arr);
    }
    const onDecreaseChangeHandler = (e) => {

        setCount(count - 1)

        if (count - 1 < 0) {
            setCount(0);
        }
        const arr = []
        for (let i = 0; i < count - 1; i++) {
            arr.push("");
        }
        setStars(arr);
    }

    return {
        value: count,
        onIncreaseChange: onIncreaseChangeHandler,
        onDecreaseChange: onDecreaseChangeHandler,
        placeholder: count,
        stars: stars
    }


}
export default useStarCounter;