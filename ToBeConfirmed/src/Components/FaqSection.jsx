/* eslint-disable react/prop-types */
import SectionalHeader from './SectionalHeader'

const FaqSection = () => {
  return (
    <div>
        <SectionalHeader
        header={"Frequency Asked Questions"}
        />
        <div className="accordian">
            <Accordian number={"01"} question={""} answer={""} />
            <Accordian number={"02"} question={""} answer={""} />
            <Accordian number={"03"} question={""} answer={""} />
            <Accordian number={"04"} question={""} answer={""} />
            <Accordian number={"05"} question={""} answer={""} />
            <Accordian number={"06"} question={""} answer={""} />
        </div>
        <div className="add-question">
            <p>If the question you want answered isn’t here or require further clarification then we are always on hand to guide you through. No Artificial Intelligence, just a hand touch to get you through </p>
            <button className='add-question-btn'>Ask Us</button>
        </div>
    </div>
  )
}

export default FaqSection

function Accordian({ number, answer, question }) {
    return (
        <div className="accordion-item">
            <h1 className='item-number'>{number}</h1>
            <div className="item-query">
                <h3>{question}</h3>
                <p>{answer}</p>
            </div>
        </div>
    )
}