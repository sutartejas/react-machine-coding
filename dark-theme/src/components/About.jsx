
import { useTheme } from '../useThemeContext'

const About =()=>{
    const {theme} = useTheme()

    return <div className={`about ${theme}`} >
        <h1>About Component</h1>
        <div>Welcome to About Component!</div>
    </div> 
}

export default About;