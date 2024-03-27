
const ProgressBar = ({ value }) => {

    return <div className="progress">
        <span style={{ color: value > 49 ? 'white' : 'black' }}>{value >= 100 ? 100 : value.toFixed()}%</span>
        <div style={{ width: `${value >= 100 ? 100 : value.toFixed()}%` }}></div>
    </div >

}

export default ProgressBar;