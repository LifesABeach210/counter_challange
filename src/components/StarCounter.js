// import star from '../assets/star.png';
// import React from 'react';
// import { useState } from 'react';
// function StarCounter() {
//     const [count, setCount] = useState(0)
//     const [stars, setStars] = useState([])
//     const onChangeHandler = (num) => {
//         console.log("onChangeHandler", num);
//         setCount(count + num)
//         if (count > 5) {
//             setCount(5)
//         }
//         if (count < 0) {
//             setCount(0);
//         }
//         const arr = []
//         for (let i = 0; i < count; i++) {
//             arr.push("");
//         }
//         setStars(arr);
//     }
//     return (
//         <div className="App">



//             <div>
//                 <p>Count: {count}</p>
//                 <button onClick={() => onChangeHandler(1)}>Add</button>
//                 <button onClick={() => onChangeHandler(-1)}>Subtract</button>

//                 {stars.map((row) => (
//                     <img height={25} width={25} alt='start' src={star}></img>

//                 ))}


//             </div>


//         </div>
//     );
// }

// export default StarCounter;