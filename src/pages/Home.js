import React, {useEffect, useState} from 'react';
import HOC from '../components/HOC';
// import WithLoader from '../components/WithLoader';
import PropTypes from "prop-types";
// import ActionLink from '../components/ActionLink';

const Home = (props) => {
    const {name, age = 16} = props;

    const [available, setAvailable] = useState(false)
    const [message, setMessage] = useState('No availability yet');
    useEffect(() => {
        setMessage(name + ' is '  + (available ? 'available' : 'unavailable'));

        return () => {
            setMessage(null)
        }
    }, [available]);
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log("The link was clicked.");
        setAvailable(available => !available)
    };

    return (
        <>
            <h1>Welcome Home {name}, {age} years!</h1>
            <h1>{message}</h1>

            {/* <ActionLink link={'/about'} text={'About'} style={{color:'red'}}
                onClick={handleClick} />
            <ActionLink link={'/services'} text={'Services'} style={{color:'green'}}
                onClick={handleClick} /> */}
        </>
    )
}

Home.defaultProps = {
    name: 'Davido',
    age: 45
}

Home.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default Home;