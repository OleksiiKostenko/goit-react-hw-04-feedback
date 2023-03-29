import PropTypes from 'prop-types'
import css from 'components/feedbackMarup/Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <ul className={css.item}>
        <li className={css.list}>Good: <span className={css.value}>{good}</span></li>
        <li className={css.list}>Neutral: <span className={css.value}>{neutral}</span></li>
        <li className={css.list}>Bad: <span className={css.value}>{bad}</span></li>
        <li className={css.list}>Total: <span className={css.value}>{total}</span></li>
        <li className={css.list}>Positive feedback: <span className={css.value}>{positivePercentage}</span></li>
    </ul>)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
}