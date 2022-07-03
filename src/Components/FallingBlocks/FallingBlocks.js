import './FallingBlocks.scss';
import React from 'react';

function FallingBlocks ({morphsArray, blockVisible}) {


    const blockVisClass = blockVisible ? "blocks__single blocks__single--current" : "blocks__single--hidden"

    // if first block is at bottom position, show second block


    let shuffledMorphsArray = morphsArray
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

       return (

           <section className='blocks'>
                {shuffledMorphsArray?.map((morph,index) => {
                    return(
                        <div 
                            key={index}
                            className="blocks__single blocks__single--current blocks__single--testing"
                            tabIndex="0"
                            onKeyDown={() => console.log("key listened!")}
                            >
                            {morph}

                        </div>
                    )
                })}
                     
           </section>
       )
   }
 

export default FallingBlocks;

// WIP switch for key listeners
   // const move = ((direction) => {
    //     switch (direction) {
    //         case 'up':
    //             setTop((top) => top - pixelDistance);
    //             break;
    //         case 'down':
    //             setTop((top) => top + pixelDistance);
    //             break;
    //         case 'left':
    //             setLeft((left) => left - pixelDistance);
    //             break;
    //         case 'right':
    //             setLeft((left) => left + pixelDistance);
    //             break;
    //     }

    // })

