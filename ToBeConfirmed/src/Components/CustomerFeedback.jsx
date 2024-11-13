import SectionalHeader from "./SectionalHeader"

const CustomerFeedback = () => {
  return (
    <div>
      <SectionalHeader
      header={"Client Feedback"}
      />
      <div className="customer-feedback-container">
        <FeedbackText item={feedbackData[0]} />
        <FeedbackText item={feedbackData[1]} />
        <FeedbackAudio item={feedbackData[2]} />
  
    </div>
  )
}

export default CustomerFeedback

function FeedbackText({}) {
    returrn (
        <div>
            <img src="" alt="customer-feedback" />
            <h2>{item.name}</h2>
            <p>{item.feedback}</p>
        </div>
    )
}

function FeedbackAudio({}) {
    return (
        <div>
            <audio controls>
                <source src="" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}