/* eslint-disable react/prop-types */

const RatingsCard = ({ name, occupation}) => {
  return (
    <div className="ratings-card">
        <div className="reviewer">
            
            <div className="reviewer-identity">
                <h4>{name}</h4>
                <h4>{occupation}</h4>
            </div>
        </div>
    </div>
  )
}

export default RatingsCard

function AudioReview({ video}) {
  return (
    <video src={video} width="600" height="300" controls="controls" />
  )
}

function TextReview() {
  return (
    <div>
      <h1>Text Review</h1>
      <p>This is a text review.</p>
    </div>
  )
}