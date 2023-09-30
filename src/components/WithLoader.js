import React, {useState, useEffect} from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const WithLoader = (WrappedComponent) => {

    const WithLoaderComponent = (props) => {
        let _timer = null;
        const [isLoading, setIsLoading] = useState(true);
        const [name, setName] = useState('Salem');
        // useEffect(() => {
        //     _timer = setTimeout(() => {
        //         setIsLoading(false)
        //     }, 3000)
    
        //     // return () => {
        //     //     // _timer =  null;
        //     //     clearTimeout(_timer)
        //     // }
        // });

        useEffect(() => {
            _timer = setTimeout(() => {
                setIsLoading(false)
                setName('Jazzy')
            }, 3000)
    
            return () => {
                clearTimeout(_timer)
                setName(null)
                setIsLoading(false)
            }
        }, []);

        // useEffect(() => {
        //     _timer = setTimeout(() => {
        //         setIsLoading(false)
        //     }, 3000)
    
        //     return () => {
        //         // _timer =  null;
        //         clearTimeout(_timer)
        //     }
        // }, []);
    
        return isLoading ? (<BeatLoader size={30} color={'#36d7b7'}/>) : 
                (<WrappedComponent {...props} />);
    };
    return WithLoaderComponent;
} 

export default WithLoader;