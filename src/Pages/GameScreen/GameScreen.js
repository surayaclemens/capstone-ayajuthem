import "./GameScreen.scss";
import React from "react";
import Button from "../../Components/Button/Button";
import BackNav from "../../Components/BackNav/BackNav";
import AnswerModal from "../../Components/AnswerModal/AnswerModal";
import EnglishPhrase from "../../Components/EnglishPhrase/EnglishPhrase";
import FallingBlocks from "../../Components/FallingBlocks/FallingBlocks";
import Output from "../../Components/Output/Output";
import gameImage3 from "../../Assets/purpleorb.png";

import phrasesAPI from "../../utils/apiConfig";

class GameScreen extends React.Component {
  state = {
    phraseObj: "",
    phrasesArray: [],
    blockVisible: true,
    shuffledMorphsArray: [],
    showAnswerModal: false,
    blockLeft: [0, 140, 280],
    blockTop: [0, 0, 0],
    blockActiveState: [false, false, false],
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

  // Function to randomize all phrases and morphemes
  randomizer = () => {
    let randomIndex = Math.floor(Math.random() * this.state.phrasesArray.length);
    let singlePhrase = this.state.phrasesArray[randomIndex];
    // split the single phrase to have its morphs in an array
    let morphArray = singlePhrase.ayajuthem.split(" ");
    let shuffledMorphsArray = morphArray
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    this.setState({
        phraseObj: singlePhrase,
        shuffledMorphsArray: shuffledMorphsArray,
    });
  }

  // Function to get new random phrase on click of "next" within modal
  handleNext = () => {
    this.randomizer();
    this.setState({
      gameRound: this.state.gameRound++,
      blockLeft: [0, 140, 280],
      blockTop: [0, 0, 0],
    })
  }
  // Function to show blocks
  showBlock = () => {
      this.setState({
        blockVisible: true
      })
  }
// Function to show answer modal
  showModal = () => {
    this.setState({
      showAnswerModal: true,
    })
  }
  // Function to hide answer modal
  hideModal = () => {
    this.setState({
      showAnswerModal: false,
    })
  }
  // Function to set the active block (on click)
  makeBlockActive = (index) => {
    let booleanArray = [false, false, false]
    booleanArray[index] = true
    this.setState({
      blockActiveState: booleanArray
    })
  }

// MOVEMENT FUNCTIONS
// Move left
 moveLeft = (index) => {
  let movement = -10
  if (index === 0){
    let newPosition = this.state.blockLeft
    newPosition[0] = newPosition[0] + movement
    this.setState({
      blockLeft: newPosition
    })
  }
  if (index === 1){
    let newPosition = this.state.blockLeft
    newPosition[1] = newPosition[1] + movement
    this.setState({
      blockLeft: newPosition
    })
  }
  if (index === 2){
    let newPosition = this.state.blockLeft
    newPosition[2] = newPosition[2] + movement
    this.setState({
      blockLeft: newPosition
    })
  }
}
// Move right
moveRight = (index) => {
  let movement = 10
  if (index === 0){
    let newPosition = this.state.blockLeft
    newPosition[0] = newPosition[0] + movement
    this.setState({
      blockLeft: newPosition
    })
  }
  if (index === 1){
    let newPosition = this.state.blockLeft
    newPosition[1] = newPosition[1] + movement
    this.setState({
      blockLeft: newPosition
    })
  }
  if (index === 2){
    let newPosition = this.state.blockLeft
    newPosition[2] = newPosition[2] + movement
    this.setState({
      blockLeft: newPosition
    })
  }
}
// Move up
moveUp = (index) => {
  let movement = -10
  if (index === 0){
    let newPosition = this.state.blockTop
    newPosition[0] = newPosition[0] + movement
    this.setState({
      blockTop: newPosition
    })
  }
  if (index === 1){
    let newPosition = this.state.blockTop
    newPosition[1] = newPosition[1] + movement
    this.setState({
      blockTop: newPosition
    })
  }
  if (index === 2){
    let newPosition = this.state.blockTop
    newPosition[2] = newPosition[2] + movement
    this.setState({
      blockTop: newPosition
    })
  }
}
// Move down
moveDown = (index) => {
  let movement = 10
  if (index === 0){
    let newPosition = this.state.blockTop
    newPosition[0] = newPosition[0] + movement
    this.setState({
      blockTop: newPosition
    })
  }
  if (index === 1){
    let newPosition = this.state.blockTop
    newPosition[1] = newPosition[1] + movement
    this.setState({
      blockTop: newPosition
    })
  }
  if (index === 2){
    let newPosition = this.state.blockTop
    newPosition[2] = newPosition[2] + movement
    this.setState({
      blockTop: newPosition
    })
  }
}

// ARROW KEY LISTENERS
arrowKeyMove = (e, index) => {
  e.preventDefault()
 
  if (e.keyCode === 38) {
    if (this.blockActiveState = true){
      this.moveUp(index)
    }
  }
  else if (e.keyCode === 40) {
    if (this.blockActiveState = true){
      this.moveDown(index)
    }
  }
  else if (e.keyCode === 37) {
    if (this.blockActiveState = true){
      this.moveLeft(index)
    }
  }
  else if (e.keyCode === 39) {
    if (this.blockActiveState = true){
      this.moveRight(index)
    }
  }
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
              <h2 className="main__test-title">60s on the clock👇🏾</h2>
            </div>

            <EnglishPhrase phrase={this.state.phraseObj.english} />

            <section className="game">
              <div className="game__image-wrapper">
                  <div className="game__image-top">
                    <img className="game__image" src={gameImage3} alt="" />
                  </div>
                  <div className="game__image-bottom">
                    <img className="game__image" src={gameImage3} alt="" />
                    <img className="game__image" src={gameImage3} alt="" />
                  </div>
              </div>
              <div className="game__fall-space">
                  <FallingBlocks 
                  shuffledMorphsArray={this.state.shuffledMorphsArray}
                  blockVisible={this.state.blockVisible}
                  blockLeft={this.state.blockLeft}
                  blockTop={this.state.blockTop}
                  makeBlockActive={this.makeBlockActive}
                  blockActiveState={this.state.blockActiveState}
                  moveLeft={this.moveLeft}
                  booleanArray={this.state.booleanArray}
                  arrowKeyMove={this.arrowKeyMove}
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
