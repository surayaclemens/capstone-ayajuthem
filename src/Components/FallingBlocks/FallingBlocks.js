import './FallingBlocks.scss';
import React from 'react';

function FallingBlocks ({shuffledMorphsArray, blockVisible, blockLeft, blockTop, makeBlockActive, arrowKeyMove}) {

  const blockVisClass = blockVisible ? "blocks__single blocks__single--current" : "blocks__single--hidden"

      return (
          <section className='blocks'>
            {/* mapping array, for each morph returning a div with click to activate and keypress listeners */}
              {shuffledMorphsArray?.map((morph,index) => {
                  return(
                    <div style={{
                      left: blockLeft[index]+"px",
                      top: blockTop[index]+"px"
                    }}
                      key={index}
                      className={blockVisClass}
                      onClick={() => makeBlockActive(index)}
                      onKeyDown={(e) => arrowKeyMove(e, index)}
                      tabIndex="1"
                    >
                      {morph}
                    </div>
                  )
              })}
                    
          </section>
      )
  }
 
export default FallingBlocks;

