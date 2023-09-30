import React from 'react';

// class Greeting extends React.Component {
//     render(){
//         return <h1>Hi, I’m a smart component!</h1>;
//     }
// }

export const Greeting = (props) => {
    return (
        <>
            <h1>Hello World from my first component!</h1>
            {props.children}
        </>
    );
}

export const Greeting1 = (props) => {
    return (
        <>
            <h1>Hello World from my first component!</h1>
            {props.children}
        </>
    );
}

// export default Greeting;