import './AnswerModal.scss';
import Button from '../Button/Button';
import closeIcon from '../../Assets/closeGreen.svg';


function AnswerModal( { hideModal, correctAnswer, showAnswerModal, handleNext }) {
    const modalDisplayClass = showAnswerModal ? "answer-modal answer-modal--show" : "answer modal answer-modal--hide"
    
    return (  
        <div className={modalDisplayClass}
            onClick={hideModal}>
            <div className='answer-modal__content'>
                <div className='answer-modal__close'>
                    <img className='answer-modal__close-icon' src={closeIcon} alt='close-icon' onClick={hideModal} />
                </div>
                <h3 className='answer-modal__header'>Compare your answer to:</h3>
                <p className='answer-modal__correct-answer'>
                    {correctAnswer}
                </p>
                <p className='answer-modal__message'>Try another?</p>

                <Button buttonText="Next" handler={handleNext} className='button button--plain'/>
            </div>
        </div>
    );
}

export default AnswerModal;