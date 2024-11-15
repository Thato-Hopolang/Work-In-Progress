/* eslint-disable react/prop-types */
import SectionalHeader from "./SectionalHeader"

const CustomerFeedback = () => {
  return (
    <div>
      <SectionalHeader
      header={"Client Feedback"}
      />
      <div className="customer-feedback-container">
        <FeedbackText item=""/>
        <FeedbackText item=""/>
        <FeedbackAudio item=""/>
      </div>
    </div>
  )
}

export default CustomerFeedback

function FeedbackText({item}) {
    return (
        <div>
            <img src="" alt="customer-feedback" />
            <h2>{item.name}</h2>
            <p>{item.feedback}</p>
        </div>
    )
}

function FeedbackAudio({src}) {
    return (
        <div>
            <audio controls>
                <source src={src} type="audio" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}