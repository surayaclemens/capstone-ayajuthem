import './AnswerModal.scss';
import Button from '../Button/Button';
import closeIcon from '../../Assets/cross.png';


function AnswerModal( { hideModal, correctAnswer, showAnswerModal, answerMessage }) {
    const modalDisplayClass = showAnswerModal ? 'answer-modal' : 'answer-modal--hide'

    
    return (  
        <div className={modalDisplayClass}>
            <div className='answer-modal__close'>
                <img src={closeIcon} alt='close-icon' onClick={hideModal} />
            </div>
            <h3 className='answer-modal__header'>Correct answer:</h3>
            <p className='answer-modal__correct-answer'>
                {correctAnswer}
            </p>
            <p className='answer-modal__message'>{answerMessage}</p>
            <p>testing text</p>

            <Button buttonText="Next"/>
        </div>
    );
}

export default AnswerModal;