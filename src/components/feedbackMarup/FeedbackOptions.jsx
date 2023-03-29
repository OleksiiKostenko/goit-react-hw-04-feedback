import PropTypes from 'prop-types';
import css from 'components/feedbackMarup/FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.item}>
            {options.map(option => (
        <li className= {css.list} key={option}>
            <button className= {css.btn} type="button" onClick={onLeaveFeedback}>{option}</button>
        </li>
           ))}
    </ul>)
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}