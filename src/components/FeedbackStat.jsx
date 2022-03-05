import { useContext } from 'react';
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackStat() {
    const {feedback} = useContext(FeedbackContext);
    let avg = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length
    avg = avg.toFixed(1).replace(/[.,]0$/, '')
return <div className="feedback-stats">
      <h1>{feedback.length}</h1>
      <h4> Average Rating: {isNaN(avg)? 0 : avg} </h4>
  </div>;
}
