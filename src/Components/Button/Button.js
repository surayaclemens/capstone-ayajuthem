import './Button.scss';
import React from 'react';

function Button ({buttonText, handler}) {
        return(
            <button 
                className='button'
                onClick={handler}
                >
                {buttonText}
            </button>
        )
}

export default Button;