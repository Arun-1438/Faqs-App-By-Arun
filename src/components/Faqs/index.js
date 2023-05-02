// Write your code here.
import {Component} from 'react'
import FaqsItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {clickedTab: []}

  onShowAnswerTab = id => {
    console.log(id)
    const {clickedTab} = this.state
    if (clickedTab.includes(id)) {
      const filterTab = clickedTab.filter(each => each !== id)
      this.setState({clickedTab: filterTab})
    } else {
      this.setState(prevState => ({clickedTab: [...prevState.clickedTab, id]}))
    }
  }

  render() {
    const {faqsList} = this.props
    const {clickedTab} = this.state
    console.log(clickedTab)
    return (
      <div className="main-faqs-container">
        <div className="faqs-container">
          <h1>FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(each => (
              <FaqsItem
                eachFaq={each}
                key={each.id}
                isShow={clickedTab.includes(each.id)}
                onShowAnswerTab={this.onShowAnswerTab}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
