/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import SectionalHeader from "./SectionalHeader"

const PricingSection = () => {
  return (
    <div className="pricing-section">
        <div className="section-title">
            <SectionalHeader
            header={"Pricing"}
            paragraph={"But you’re a house nigga so you don’t know how this shit go with my big lips and my bih nose, and my big dick and short hurr caou already know my shit slow grow."}
            />
            
        </div>
    </div>
  )
}

export default PricingSection

function Button () {
    return (
        <button>Start Trial</button>
    )
}

function PricingCard() {
    return (
        <div>
            <div className="Plan-identifiyer"></div>
            <div className="included-features">
            </div>
            <Button/>
        </div>
    )
}



function IncludedItem({item}) {
    return (
        <li>{item}</li>
    )
}
