import { useState } from "react"


const Accordion = ({ questions }) => {
    const [expand, setExpand] = useState(false)
    return <div className="accordion-container">
        <div className="accordion-title">
            {questions.title}
            <button className='expand' onClick={(() => setExpand(!expand))}> {expand ? '-' : '+'}</button>
        </div>
        {expand ? <p>{questions.info}</p> : ''}
    </div>
}

export default Accordion;