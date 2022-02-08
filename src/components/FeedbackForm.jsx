import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useState } from 'react';
export default function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) =>{
        if(text === ''){
            setbtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters');
            setbtnDisabled(true);
        }
        else{
            setMessage(null);
            setbtnDisabled(false);
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
            setText(null);
        }    
    };
  return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>
                  How would you rate your service with us?
              </h2>
              <RatingSelect select={(rating)=> setRating(rating)}/>
              <div className="input-group">
                  <input onChange={handleTextChange} type="text" value={text}  placeholder='Write a review'/>
                  <Button type='submit' isDisabled={btnDisabled}> Send </Button>
              </div>
          </form>
          {message && <div className='message'> {message} </div>}
      </Card>
  );
}
