import React, { useState , useEffect} from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)


  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
   if(feedbackEdit.edit === true) {
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
   }
  },[feedbackEdit])


  const handleText = (e) => {
    if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
    }
    else if (text !== '' && text.trim().length < 10)
    {
        setMessage('Text must be atleast 10 characters')
        setBtnDisabled(true)
    } else {
        setMessage(null)
        setBtnDisabled(false)
    }
    
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length >= 10) {
        const newFeedback = {
            text,
            rating,
        }

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id,newFeedback)
        } else {
        addFeedback(newFeedback) }
    
        console.log(newFeedback)
        setText('')
    }
  }

  return (
        <Card>
        <form onSubmit={handleSubmit}>
            <h2>how would you rate your service with us ?</h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
                <div className="input-group">
                <input onChange={handleText} 
                type="text"
                placeholder='Write a review' 
                value={text} />
                <Button
                 type='submit'
                 isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div> }
        </form>

    </Card>
  )
}

export default FeedbackForm