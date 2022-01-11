
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './models/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'


function App() {

    const [feedbacks, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Delete this shit, bitch?')) {
            setFeedback( feedbacks.filter((fb) => fb.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        
        setFeedback([newFeedback, ...feedbacks])
    }
    
    return (
        <Router>
            <Route exact path='/'>
                <div className='main'>

                    <Header 
                        text='Feedback UI' 
                        colorBackground='#1d1d1d'
                        colorText='#ff79a4' />

                    <div className='container'>

                        <FeedbackForm handleAdd={ addFeedback } />

                        <FeedbackStats feedbacks={ feedbacks } />

                        <FeedbackList feedbacks={ feedbacks } handleDelete={ deleteFeedback } />

                    </div>
                </div>

            </Route>
            <Route path='/about' element={<About />} />
                
        </Router>
        
    )
}

export default App