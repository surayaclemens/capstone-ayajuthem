import './NextList.scss';
import React from 'react';

function NextList ({ input }) {

 let morphs = input?.split (" ");
 console.log(morphs);


        return(
            <section className='next-list'>
                <h2 className='next-list__header'>Next Up</h2>
                <div className='next-list__morpheme-box'>
                    <div className='next-list__morpheme-wrapper'>
                        <div className='next-list__morpheme-list'>
                            {/* map through split morpheme array and for each morpheme, return a div with single morph*/}
                            {morphs?.map((morph) => {
                                return(
                                    <div className='next-list__morpheme-single'>
                                        {morph}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }


export default NextList;
