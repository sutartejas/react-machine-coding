import { useState } from "react"

const Tabs = ({ tabsData, currentIndex = 0 }) => {

    const [activeIndex, setActiveIndex] = useState(currentIndex);

    function getTabsHeading() {
        return <div className="tabs-heading-container">
            {tabsData.map((tab, index) => {
                return <button onClick={() => setActiveIndex(index)} className="tab-heading">
                    {tab.label}
                </button>
            })}
        </div>
    }

    function getTabsContent() {
        return <div className="tab-content-container">
            {tabsData.map((tab, index) => {
                return <p className={`${index === activeIndex ? "active" : "inactive"}`}>
                    {tab.content}
                </p>
            })}
        </div>
    }

    return <>
        {getTabsHeading()}
        {getTabsContent()}
    </>
}

export default Tabs;