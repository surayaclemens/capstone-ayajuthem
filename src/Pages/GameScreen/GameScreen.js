import "./GameScreen.scss";
import React from "react";
import Button from "../../Components/Button/Button";
import BackNav from "../../Components/BackNav/BackNav";
// import Timer from '../../Components/Timer/Timer';
import AnswerModal from "../../Components/AnswerModal/AnswerModal";
import EnglishPhrase from "../../Components/EnglishPhrase/EnglishPhrase";
import FallingBlocks from "../../Components/FallingBlocks/FallingBlocks";
import NextList from "../../Components/NextList/NextList";
import Output from "../../Components/Output/Output";
import dummyImage from "../../Assets/dummy.svg";
import phrasesAPI from "../../utils/apiConfig";

class GameScreen extends React.Component {
  state = {
    phraseObj: "",
    phrasesArray: [],
    blockVisible: true,
    blockArray: [],
    // output: [],
    showAnswerModal: false,
    blockLeft: [0, 175, 350]

    // userAnswerCorrect: false
  };

  // INITIAL MOUNT
  dataURL = "http://localhost:5050/phrases";

  componentDidMount() {

    document.title="Game on  🧱 👀 🕹 "

    phrasesAPI.getAll()
        .then((response) => {
        // get all the phrases from API 
        const allPhrases = response.data;

        // put all the phrases in current state
        this.setState({
          phrasesArray: allPhrases,
        });

// might have to put from here down to just before catch back into function so it can work on next button in modal
        // randomize all phrases from API to get single phrase for phraseObj
        const randomIndex = Math.floor(Math.random() * allPhrases.length);
       
        let singlePhrase = allPhrases[randomIndex];
        // split the single phrase to have its morphs in an array
        let morphArray = singlePhrase.ayajuthem.split(" ");
    
        

        this.setState({
           // **trying to add filter so phrases don't repeat, could also try to tack onto end of [randomIndex]
            phraseObj: singlePhrase,
            blockArray: morphArray,
        });


        
      })
      .catch((error) => console.error(error));
  }

componentDidUpdate(){
// component did update just changes class of block for visibility, so your current play block updates. but how to get this to fire?

// if block 1 is... in certain position?? is that even possible? set timeout? change state of block 2 to visible
    
    this.showBlock = () => {
        this.setState({
            blockVisible: true
        })
    }


    // let allMorphs = this.state.phraseObj.ayajuthem?.split(" ");
    // // console.log(this.state.phraseObj.ayajuthem)
    // allMorphs?.forEach((morph) => {
    //     // this.getRandomMorph(allMorphs);
    //     let singleMorph = morph;
    //     console.log(singleMorph);
    // });
    // state change is just whatever block they're on
}




    // array in right order, array in random order
    // do randomizing in mount, determine which word is first, second, third (array of 3 shuffled morphs) then pull one in update

    // Morpheme randomizer for single morpheme for play block
    // getRandomMorph = (array) => {
    //     const randomNumber = Math.floor(Math.random() * array.length);
    //     let randomMorph = array[randomNumber];
    //         this.setState({
    //             currentBlock: randomMorph
    //         });
    // };



  // FUNCTIONS FOR MODAL
  showModal = () => {
    this.setState({
      showAnswerModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showAnswerModal: false,
    });
  };


//   ***might need to make getRandomMorph a function again so it can be called in the modal to move to the next one
  // Get new random phrase on click of "next" within modal
  handleNext = () => {
    this.getRandomPhrase(this.state.phrasesArray);
    this.setState({
      showAnswerModal: false,
    });
    this.getRandomMorph(this.state.morphArray);
  };

  // answerMessage = () => {
  //     // if user output == answer -> display correct message, else display incorrect
  //     console.log('write this function later');
  // }

  render() {
    return (
      <main className="main">
            <AnswerModal
            showAnswerModal={this.state.showAnswerModal}
            hideModal={this.hideModal}
            answerMessage={this.answerMessage}
            handleNext={this.handleNext}
            correctAnswer={this.state.phraseObj.ayajuthem}
            />

            <div className="main__top-wrapper">
            <BackNav />
            {/* <Timer /> */}
            <h2 className="main__test-title">60s</h2>
            </div>

            <EnglishPhrase phrase={this.state.phraseObj.english} />

            <section className="game">
            <img className="game__image" src={dummyImage} alt="" />
            <div className="game__fall-space">
                <FallingBlocks 
                morphsArray={this.state.blockArray}
                blockVisible={this.state.blockVisible}
                blockLeft={this.state.blockLeft}
                />
            </div>
            <div className="game__next-list">
                <NextList ayajuthem={this.state.phraseObj.ayajuthem} 
                />
            </div>
            </section>

            <div className="game__output">
                <Output />
            </div>

            <Button buttonText="Check" handler={this.showModal} className='button button--plain'/>
      </main>
    );
  }
}

export default GameScreen;
