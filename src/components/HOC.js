import React, {Component} from 'react';

const HOC = (WrappedComponent) => {

    class HOCComponent extends Component{
        _timer = null;
        state = {
            isLoading: true,
            name: 'Nife'
        };

        constructor(props) {
            super(props);
            this.state = {isLoading: true, name: 'Nidemi'};
        }

        componentDidMount() {
            this._timer = setTimeout(() => {
                this.setState({isLoading: false, name: 'Aquaman' })
            }, 3000)
        }
        
        componentWillUnmount() {
            clearTimeout(this._timer);
        }

        render(){
            return this.state.isLoading ? (<h1>Please wait...</h1>) 
            : (<WrappedComponent /*{...this.props}*/ />);
        }
    } 
    return HOCComponent;
}

export default HOC;