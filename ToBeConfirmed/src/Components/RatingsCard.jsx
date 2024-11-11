/* eslint-disable react/prop-types */

const RatingsCard = ({ name, occupation}) => {
  return (
    <div className="ratings-card">
        <div className="reviewer">
            <img src="" alt="reviewer-profile" />
            <div className="reviewer-identity">
                <h4>{name}</h4>
                <h4>{occupation}</h4>
            </div>
        </div>
    </div>
  )
}

export default RatingsCard