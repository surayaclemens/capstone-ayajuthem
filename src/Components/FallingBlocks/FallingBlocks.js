import './FallingBlocks.scss';
import React from 'react';

function FallingBlocks ({firstBlock, allMorphs, secondBlock, thirdBlock}) {


    // const blockVisClass = blockVisible ? "blocks__single--visible" : "blocks__single--hidden"
    // {blockVisClass}

       return (

           <section className='blocks'>
                        <div className='blocks__single'>
                            {firstBlock}
                        </div>
                        {/* {allMorphs?.map((morph => {
                            return(
                                <div className='blocks__single'>
                                    {morph}
                                </div>
                            )
                        }))} */}
                        <div className='blocks__single'>
                            {secondBlock}
                        </div>
                        <div className='blocks__single'>
                            {thirdBlock}
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

