import { useState } from "react";

import './Counter.css'

export default function Counter(props) {

    const [count, changeCount] = useState(0);

    const handleClick = () => {
        changeCount(newCount => newCount + 1);
    }

    return (
        <button onClick={handleClick}>{count}</button>
    );
}

// import React from "react";

// export default class Counter extends React.Component {
//     state = {
//       count: 0
//     };
//     handleClick = () => {
//       this.setState(({ count }) => ({
//         count: count + 1
//       }));
//     };
//     render() {
//       return <button onClick={this.handleClick}>{this.state.count}</button>;
//     }
//   }