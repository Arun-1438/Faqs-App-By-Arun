// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaq, onShowAnswerTab, isShow} = props
  const {questionText, id, answerText} = eachFaq
  console.log(isShow)
  const imageUrl = isShow
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = isShow ? 'minus' : 'plus'

  const onClickBtn = () => {
    onShowAnswerTab(id)
  }

  return (
    <li className="list-item">
      <div className="question-container">
        <h3>{questionText}</h3>
        <button onClick={onClickBtn} type="button">
          <img src={imageUrl} alt={altText} />
        </button>
      </div>
      {isShow && <p className="answer-text">{answerText}</p>}
    </li>
  )
}

export default FaqItem
