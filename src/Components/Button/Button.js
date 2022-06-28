import './Button.scss';
import React from 'react';

function Button ({buttonText, buttonFunction}) {
        return(
            <button 
                className='button'
                onClick={buttonFunction}
                >
                {buttonText}
            </button>
        )
}

export default Button;