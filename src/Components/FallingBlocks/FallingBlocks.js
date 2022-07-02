import './FallingBlocks.scss';
import React from 'react';

function FallingBlocks ({singleBlock}) {


    // const blockVisClass = blockVisible ? "blocks__single--visible" : "blocks__single--hidden"
    // {blockVisClass}

       return (

           <section className='blocks'>
                        <div className='blocks__single'>
                            {singleBlock}
                        </div>
                 
                {/* {morphsArray?.map((morph) => {
                   return(
                       <div className={blockVisClass}>
                           {morph}  
                       </div>
                   )
               })} */}

           </section>
       )
   }
 

export default FallingBlocks;

