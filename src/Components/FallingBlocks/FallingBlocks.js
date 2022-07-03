import './FallingBlocks.scss';
import React from 'react';

function FallingBlocks ({morphsArray}) {


    // const blockVisClass = blockVisible ? "blocks__single--visible" : "blocks__single--hidden"
    // {blockVisClass}

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
                        className='next-list__morpheme-single'>
                            {morph}
                        </div>
                    )
                })}

                        {/* // <div className='blocks__single'>
                        //     {firstBlock}
                        // </div>
                        // <div className='blocks__single'>
                        //     {secondBlock}
                        // </div>
                        // <div className='blocks__single'>
                        //     {thirdBlock}
                        // </div> */}
           </section>
       )
   }
 

export default FallingBlocks;

