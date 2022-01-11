import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbacks, handleDelete }) {

    
    return <div>
            { feedbacks.map((fb, index) => (
                <FeedbackItem 
                    key={ index } 
                    feedback={ fb }
                    handleDelete={ handleDelete } />
            )) }
        </div>
}

FeedbackList.propTypes = {
    feedbacks: PropTypes.array.isRequired
}

export default FeedbackList
