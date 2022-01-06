import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './models/FeedbackData'



function App() {

    const [feedbacks, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Delete this shit, bitch?')) {
            setFeedback( feedbacks.filter((fb) => fb.id !== id))
        }
    }
    
    return (
        <div className='main'>

            <Header 
                text='Feedback UI' 
                colorBackground='#1d1d1d'
                colorText='pink' />

            <div className='container'>

                <FeedbackList feedbacks={feedbacks} handleDelete={ deleteFeedback } />

            </div>
        </div>
        
    )
}

export default App