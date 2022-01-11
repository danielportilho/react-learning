import Card from './shared/Card'
import PropTypes from 'prop-types'


function FeedbackItem({feedback, handleDelete}) {

    return (
        <Card>
            <div className='num-display'>{ feedback.rating }</div>
            <div className='text-display'>
                <button className="close" onClick={ () => handleDelete(feedback.id) }>close</button>
                { feedback.text }
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    feedback: PropTypes.object.isRequired
}

export default FeedbackItem

/**
 * ATENÇÃO...
 * 
 * <button className="close" onClick={ ...NESTA PORRA AQUI... () => handleDelete(feedback.id) }>close</button>
 * 
 * 
 * */
