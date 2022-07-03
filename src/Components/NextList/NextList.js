import './NextList.scss';
import React from 'react';

function NextList ({ ayajuthem }) {

 let morphsArray = ayajuthem?.split (" ");
//  console.log(morphsArray);


        return(
            <section className='next-list'>
                <h2 className='next-list__header'>Block Bank</h2>
                    <div className='next-list__morphemes-wrapper'>
                            {/* map through split morpheme array and for each morpheme, return a div with single morph*/}
                            {morphsArray?.map((morph,index) => {
                                return(
                                    <div 
                                    key={index}
                                    className='next-list__morpheme-single'>
                                        {morph}
                                    </div>
                                )
                            })}
                    </div>
            </section>
        )
    }


export default NextList;
