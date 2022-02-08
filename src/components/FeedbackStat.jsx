import { isCursorAtStart } from "@testing-library/user-event/dist/utils";

export default function FeedbackStat({feedback}) {

    let avg = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length
    avg = avg.toFixed(1).replace(/[.,]0$/, '')
return <div className="feedback-stats">
      <h1>{feedback.length}</h1>
      <h4> Average Rating: {isNaN(avg)? 0 : avg} </h4>
  </div>;
}
