
import { useTheme } from '../useThemeContext'

const Blog =()=>{
    const {theme} = useTheme()

    return <div className={`blog ${theme}`} >
        <h1>Blog Component</h1>
        <div>Welcome to Blog Component!</div>
    </div> 
}

export default Blog;