import { FeedbackOptions } from "./feedbackMarup/FeedbackOptions"
import { Statistics } from "./feedbackMarup/Statistics" 
import { Section } from "./feedbackMarup/Section" 
import { Notification } from "./feedbackMarup/Notification"
import { Component } from "react"

export class App extends Component{

 state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

  handleClickFeedback = (evt) => {
    if (evt.target.innerHTML === "good") this.setState((prevState) => ({ good: prevState.good + 1 }))
    else if (evt.target.innerHTML === "neutral") this.setState((prevState) => ({ neutral: prevState.neutral + 1 }))
    else if (evt.target.innerHTML === "bad") this.setState((prevState) => ({ bad: prevState.bad + 1 }))
  }
  
    countTotalFeedback = () => { 
        const {good, neutral, bad} = this.state
        return good+neutral+bad
    }
    
    countPositiveFeedbackPercentage = () => {
        const {good, neutral, bad} = this.state
        if (good || neutral || bad) {
            return ((good / (good + neutral + bad)) * 100).toFixed() + "%"
        }
    }

  render() {
        const {good, neutral, bad} = this.state
        return ( <div>
        <Section title='Please leave feedback'>
        <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleClickFeedback} />
        </Section>
        <Section title="Statistics">
            {(good || neutral || bad)
            ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />)
            : (<Notification message="There is no feedback"></Notification>)}
        </Section></div>)
    }
};
