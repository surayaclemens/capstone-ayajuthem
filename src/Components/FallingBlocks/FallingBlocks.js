import './FallingBlocks.scss';
import React from 'react';
// import ArrowKeysReact from 'arrow-keys-react/lib/ArrowKeysReact';

function FallingBlocks ({morphsArray, blockVisible, blockLeft, blockActive, activateBlock}) {

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
  
  let shuffledMorphsArray = morphsArray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const arrowKeyMove = (e) => {
    e.preventDefault()
    if (e.keyCode === '38') {
      console.log("key up listening")
    }
    else if (e.keyCode === '40') {
      console.log("key down listening")
    }
    else if (e.keyCode === '37') {
      
    }
    else if (e.keyCode === '39') {
      console.log("key right listening")
    }

  }
  
  //  if active block that is stored in state's index is the same index as the one in the mapped divs below, make it visible and tab index 1
// if (blockActive = true) {
  
// }


      return (
          <section className='blocks'>
            {/* mapping array, for each morph returning a div with keypress listeners */}
              {shuffledMorphsArray?.map((morph,index) => {

                  return(
                          <div style={{
                            left: blockLeft[index]+"px"
                          }}

                            tabIndex="1"
                            key={index}
                            className={blockVisClass}
                            onClick={activateBlock}
                            onKeyDown={arrowKeyMove}
                          >
                            {morph}
                          </div>
                  )
              })}
                    
          </section>
      )
  }
 
export default FallingBlocks;

