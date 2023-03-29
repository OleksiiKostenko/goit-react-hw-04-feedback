import { FeedbackOptions } from './feedbackMarup/FeedbackOptions';
import { Statistics } from './feedbackMarup/Statistics';
import { Section } from './feedbackMarup/Section';
import { Notification } from './feedbackMarup/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleClickFeedback = evt => {
    if (evt.target.innerHTML === 'good') setGood(good + 1);
    else if (evt.target.innerHTML === 'neutral') setNeutral(neutral + 1);
    else if (evt.target.innerHTML === 'bad') setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / (good + neutral + bad)) * 100).toFixed() + '%';
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClickFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
