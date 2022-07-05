import './EnglishPhrase.scss';
import React from 'react';

function EnglishPhrase ({ phrase }) {

    return (
        <main className='english-phrase'>
            <h1 className='english-phrase__text'>
                {phrase}
                {}

            </h1>
        </main>
    )
}
 

export default EnglishPhrase;
