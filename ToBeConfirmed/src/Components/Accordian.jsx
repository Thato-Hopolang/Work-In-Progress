/* eslint-disable react/prop-types */
const Accordian = () => {
  return (
    <div>
        <div className="accordian-container">
            <Accordianitem itemnumber="01" question="Question 1" answer="Answer 1" />
            <Accordianitem itemnumber="02" question="Question 2" answer="Answer 2" />
            <Accordianitem itemnumber="03" question="Question 3" answer="Answer 3" />
            <Accordianitem itemnumber="04" question="Question 4" answer="Answer 4" />
            <Accordianitem itemnumber="05" question="Question 5" answer="Answer 5" />
            <Accordianitem itemnumber="06" question="Question 6" answer="Answer 6" />
        </div>
        <div className="section-bottom">
            <p>Some content</p>
            <button>Talk to Us</button>
        </div>
      </div>
  )
}

export default Accordian

function Accordianitem({ itemnumber, question, answer}) {
    return (
      <div>
        <h2>{itemnumber}</h2>
        <div className="accordian-content">
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
      </div>
    )
}