import './FallingBlocks.scss';
import React from 'react';
// import ArrowKeysReact from 'arrow-keys-react/lib/ArrowKeysReact';

function FallingBlocks ({morphsArray, blockVisible, blockLeft}) {

    // ArrowKeysReact.config({
    //     left: () => {
    //       console.log('left key detected.');
    //     },
    //     right: () => {
    //         // blockVisible ? "blocks__single--20pxRight" :
    //         console.log('right key detected.');
    //     },
    //     up: () => {
    //       console.log('up key detected.');
    //     },
    //     down: () => {
    //       console.log('down key detected.');
    //     }
    //   });

  const blockVisClass = blockVisible ? "blocks__single blocks__single--current" : "blocks__single--hidden"

  
  //  if currentBlock that is stored in state's index is the same index as the one in the mapped divs below, make it visible and tab index 1


  let shuffledMorphsArray = morphsArray
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

      return (
          <section className='blocks'>
            {/* mapping array, for each morph returning a div with keypress listeners */}
              {shuffledMorphsArray?.map((morph,index) => {

                  return(
                          <div style={{
                              left: blockLeft[index]+"px"
                          }}
                            // {...ArrowKeysReact.events} 
                            // tabIndex="1"
                            key={index}
                            className={blockVisClass}
                          >
                            {morph}
                          </div>
                  )
              })}
                    
          </section>
      )
  }
 
// create state that tracks which block is active
// if index of block being mapped is index of current block in state, then display tab index =1 
// e.key = arrow 


export default FallingBlocks;

