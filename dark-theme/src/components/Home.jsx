import { useTheme } from '../useThemeContext'

const Home = () => {
    const {theme} = useTheme();

    console.log(theme,"theme")

    return <div className={`home ${theme}`} >
        <h1>Home Component</h1>
        <div>Welcome to Home Component!</div>
    </div >
}

export default Home;