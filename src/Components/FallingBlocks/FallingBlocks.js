import './FallingBlocks.scss';
import React from 'react';

function FallingBlocks ({ input }) {
    let morphs = input?.split (" ");
    console.log(morphs);
   
   
    return (
        <section className='blocks'>
           
            <div className='blocks__all'>
               
            {morphs?.map((morph) => {
                return(
                    <div className='blocks__single'>
                        {morph}
                    </div>
                )
            })}
            </div>
        </section>
    )
}
 

export default FallingBlocks;
