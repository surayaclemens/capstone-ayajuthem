import './InputPhrase.scss';
import React from 'react';

function InputPhrase ({ input }) {

    return (
        <main className='input'>
            <h1 className='input__text'>
                {input}
            </h1>
        </main>
    )
}
 

export default InputPhrase;

// if (current phrase id !== previous phrase id) {}

{/* /* {phrases.find((phrase) => {
                //     phrase.id==this.match.params.phraseId
                // })
                // } */} 