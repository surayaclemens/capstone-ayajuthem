import './InputPhrase.scss';
import React from 'react';
// import axios from 'axios';

class InputPhrase extends React.Component{
    state = {
        input: "",
    }
// pulling data in from backend to fill initial mount
    dataURL = 'http://localhost:8080/testData';
    componentDidMount(){
        // axios.get(this.dataURL)
        // .then(response => {
        //     this.setState({
        //         input: response.data.english
        //     })
        // })
        // .catch(error => console.error(error))
    }


    render(){
        return (
            <main className='input'>
                <h1 className='input__text'>{this.english}</h1>
            </main>
        )
    }
}

export default InputPhrase;