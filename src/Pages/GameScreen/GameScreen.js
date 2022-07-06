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
import gameImage from "../../Assets/tet.png";
import phrasesAPI from "../../utils/apiConfig";

class GameScreen extends React.Component {
  state = {
    phraseObj: "",
    phrasesArray: [],
    blockVisible: true,
    blockArray: [],
    showAnswerModal: false,
    blockLeft: [0, 140, 280],
    blockActive: false,
    gameRound: 0

  };

  // INITIAL MOUNT
  dataURL = "http://localhost:5050/phrases";

  componentDidMount() {

  document.title="Game on  🧱 👀 🕹 "

    phrasesAPI.getAll()
      .then((response) => {
      // get all the phrases from API 
      const allPhrases = response.data;

      //Put all the phrases in current state
      this.setState({
        phrasesArray: allPhrases,
      });

      // Call randomizer, wrapped in timer so it can load
      setTimeout (this.randomizer, 1) 
      })

      .catch((error) => console.error(error));
  }

  // Function to randomize all phrases to put single into phraseObj
  randomizer = () => {
    let randomIndex = Math.floor(Math.random() * this.state.phrasesArray.length);
    let singlePhrase = this.state.phrasesArray[randomIndex];
    // split the single phrase to have its morphs in an array
    let morphArray = singlePhrase.ayajuthem.split(" ");
    this.setState({
        phraseObj: singlePhrase,
        blockArray: morphArray,
    });
  }

  // Function to get new random phrase on click of "next" within modal
  handleNext = () => {
    this.randomizer();
    this.setState({
      gameRound: this.state.gameRound++
    })
  }
  // Function to show blocks
  showBlock = () => {
      this.setState({
        blockVisible: true
      })
  }
// Function to show check modal
  showModal = () => {
    this.setState({
      showAnswerModal: true,
    });
  };
  // Function to hide check modal
  hideModal = () => {
    this.setState({
      showAnswerModal: false,
    });
  };
  // Function to set the active block (on click)
  makeBlockActive = () => {
    this.setState({
      blockActive: true
    })
  }

componentDidUpdate(prevState){

  if (this.state.phraseObj === prevState.phraseObj && this.state.gameRound !== prevState.gameRound){
    // invoking the randomizer
    this.randomizer();
  }
}

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
              <h2 className="main__test-title">60s on the clock ⬇️</h2>
            </div>

            <EnglishPhrase phrase={this.state.phraseObj.english} />

            <section className="game">
            {/* <div className="game__next-list">
                  <NextList ayajuthem={this.state.phraseObj.ayajuthem} />
              </div> */}

              <img className="game__image" src={gameImage} alt="" />

              <div className="game__fall-space">
                  <FallingBlocks 
                  morphsArray={this.state.blockArray}
                  blockVisible={this.state.blockVisible}
                  blockLeft={this.state.blockLeft}
                  activateBlock={this.makeBlockActive}
                  blockActiveState={this.state.blockActive}
                  />
              </div>
              <div className="game__animation">Finish before I hit the bottom!</div>
             
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
