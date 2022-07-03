import './Button.scss';
import React from 'react';

function Button ({buttonText, handler, className}) {
        return(
            <button 
                className={className}
                onClick={handler}
                >
                {buttonText}
            </button>
        )
}

export default Button;