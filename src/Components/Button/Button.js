import './Button.scss';
import React from 'react';

function Button ({buttonText, showModal}) {
        return(
            <button 
                className='button'
                onClick={showModal}
                >
                {buttonText}
            </button>
        )
}

export default Button;