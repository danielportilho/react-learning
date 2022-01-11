import PropTypes from 'prop-types'


function FeedbackStats({ feedbacks }) {

    let average = feedbacks.reduce((acc, fb) => {
        return acc + fb.rating
    }, 0) / feedbacks.length

    average = average.toFixed(1)

    return (
        <div className="feedback-stats">
            <h4>Average { isNaN(average) ? 0 : average }</h4>
            <h4>{ feedbacks.length } Reviews</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedbacks: PropTypes.array.isRequired
}

export default FeedbackStats
