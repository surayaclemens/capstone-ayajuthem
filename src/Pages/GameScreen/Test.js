import './GameScreen.scss';
import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button/Button';
import BackNav from '../../Components/BackNav/BackNav';
// import Timer from '../../Components/Timer/Timer';
import AnswerModal from '../../Components/AnswerModal/AnswerModal';
import EnglishPhrase from '../../Components/EnglishPhrase/EnglishPhrase';
import FallingBlocks from '../../Components/FallingBlocks/FallingBlocks';
import NextList from '../../Components/NextList/NextList';
import Output from '../../Components/Output/Output';
// import { NavLink } from 'react-router-dom';
import dummyImage from '../../Assets/dummy.svg';
import phrasesAPI from '../../utils/apiConfig';



export default function GameScreen() {

    const [phraseObj, setPhraseObj] = useState()
    const [phrasesArray, setPhrasesArray] = useState()
    const [currentBlock, setCurrentBlock] = useState()
    const [secondBlock, setSecondBlock] = useState()
    const [output, setOutput] = useState()
    const [showAnserModal, setAnswerModal] = useState(false)

    // INITIAL MOUNT
    const dataURL = 'http://localhost:5050/phrases';

    useEffect(() => {
        phrasesAPI
            .getAll()
            .then((response) => {
                // get all the phrases from api
                const allPhrases = response.data;
                // put all the phrases in current state
                setPhrasesArray(allPhrases)
                console.log(allPhrases.length)
                
                // call randomizer on all to get single phrase for phraseObj
                // the randomizer sets phraseObj -> an index of allPhrases array which is a single object with id, eng, ayaj. the eng gets put into component
                // getRandomPhrase(allPhrases);
                // turn ayajuthem string from phraseObj into array to use to get random morpheme for block
                let allMorphs = phraseObj.ayajuthem?.split(' ');
                console.log(phraseObj.ayajuthem)
                console.log(allMorphs);
                // call randomizer for each morph in array to get single morph for play block
                // timed 1 second after mount so defined & staggered
                // the randomizer sets currentBlock -> randomMorph
                setTimeout(() => {
                    allMorphs.forEach((morph) => {
                        getRandomMorph(allMorphs);
                        console.log(morph);
                    });
                }, 1000);
                // allMorphs?.forEach((morph) => {
                //   setTimeout(() => {
                //     getRandomMorph(allMorphs);
                //   }, 1000);
                //   console.log(morph);
                // });
            })
            .catch((error) => console.error(error));


    }, [phraseObj]);
    // RANDOMIZERS
    // Phrase randomizer for single phrase phraseObj from all phrases
      const getRandomPhrase = (array) => {
        // console.log(array)
        const randomIndex = Math.floor(Math.random() * array.length);
        let singlePhrase = array[randomIndex];
        phraseObj(singlePhrase)
      };
    // Morpheme randomizer for single morpheme for play block
    const getRandomMorph = (array) => {
        const randomNumber = Math.floor(Math.random() * array.length);
        let randomMorph = array[randomNumber];
        if (!currentBlock) {
            setCurrentBlock(randomMorph)
        } else {
            console.log(randomMorph);
        }
    };
    // FUNCTIONS FOR BLOCKS
    // showBlock = () => {
    //     setState({
    //         showBlock: true
    //     })
    // }
    // need to invoke this function somehow to get classes applied - what's wrong with this set timeout???
    // setTimeout(() => {showBlock()}, 3000)
    // FUNCTIONS FOR MODAL
    const showModal = () => {
        setAnswerModal(true)
    };
    const hideModal = () => {
        setAnswerModal(false)
    };
    // Get new random phrase on click of "next" within modal
    const handleNext = () => {
        getRandomPhrase(phrasesArray)
        setAnswerModal(false)
        // getRandomMorph(morphArray);
    };
    // answerMessage = () => {
    //     // if user output == answer -> display correct message, else display incorrect
    //     console.log('write this function later');
    // }

    // console.log(phraseObj.ayajuthem)
    // console.log(phraseObj.english)
    return (
        <main className=' main'>
            <AnswerModal
                showAnswerModal={showAnserModal}
                hideModal={hideModal}
                // answerMessage={answerMessage}
                handleNext={handleNext}
            />
            <div className='main__top-wrapper'>
            <BackNav />
            {/* <Timer /> */}
            <h2 className='main__test-title'>60s</h2>
            </div >
            <EnglishPhrase phrase={phraseObj.english} />
            <section className='game'>
             <img className='game__image' src={dummyImage} alt='' />
             <div className='game__fall-space'>
             <FallingBlocks
                firstBlock={currentBlock}
              // allMorphs={allMorphs}
                secondBlock={secondBlock}
              // thirdBlock={thirdBlock}
             />
             </div>
            <div className='game__next-list'>
             <NextList ayajuthem={phraseObj.ayajuthem} />
                </div>
            </section >
            <div className='game__output'>
          <Output />
        </div>
        <Button buttonText='Check' handler={showModal} />
      </main >

    )
}