import SectionalHeader from "./SectionalHeader"

/* eslint-disable react/prop-types */
const WhyUsSection = () => {
  return (
    <div>
        <SectionalHeader
        header={"Why Us"}
        />
        <div className="section-cards">
            <WhyUsCard src="" alt="supporting image" heading="Headline 1" paragraph="Paragraph 1" />
            <WhyUsCard src="" alt="supporting image" heading="Headline 2" paragraph="Paragraph 2" />
            <WhyUsCard src="" alt="supporting image" heading="Headline 3" paragraph="Paragraph 3" />
        </div>
    </div>
  )
}

export default WhyUsSection

function WhyUsCard({ src, alt, heading, paragraph}) {
    return (
        <div className="text-section">
            <img src={src} alt={alt} />
            <div className="text-section">
                <h4>{heading}</h4>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}