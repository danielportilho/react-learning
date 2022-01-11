import Button from './shared/Button'
import FeedbackRating from './FeedbackRating'
import { useState } from "react"

function FeedbackForm({ handleAdd }) {
    
    const [rating, setRating] = useState()
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [warning, setWarning] = useState('')

    const handleTextChange = (e) => {

        let chars = e.target.value

        if (chars ===  '') {
            setBtnDisabled(true)
            setWarning(null)
        } else if (chars !== '' && chars.trim().length <= 5) {
            setBtnDisabled(true)
            setWarning('Type more then 5 chars')
            
        } else {
            setWarning(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
        
        // console.log(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim().length > 5) {

            const newFeedback = {
                text,
                rating
            }

            handleAdd(newFeedback)
            setText('')
        }
    }


    return <div className="feedback-form"> 
        <form onSubmit={ handleSubmit }>
            <h2>Leave your rate and comment here:</h2>

            <FeedbackRating select={ (rate) => setRating(rate) } />

            <input onChange={ handleTextChange } value={ text } type="text" placeholder="Type a comment Here" />
            <Button type={ 'submit' } isDisabled={ btnDisabled }>Submit</Button>
            { warning && <div className='warning'>{ warning }</div> }

        </form>
    </div>
}

export default FeedbackForm
