
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Blog from "./Blog";
import NavBar from "./NavBar";

const DarkTheme = () => {

    return (<Router>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </Router>
    )
}

export default DarkTheme