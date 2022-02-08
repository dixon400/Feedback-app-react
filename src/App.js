import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }
  }

  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4();
    console.log({newFeedback});
  }
  return (
    <div className="App">
      <Header text="Header"/>
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStat feedback={feedback}/>
          <FeedbackList 
            feedback={feedback}
            handleDelete={deleteFeedback}/>
      </div>
    </div>
  );
}

export default App;
