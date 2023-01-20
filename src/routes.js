import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './App.js';
import Home from './components/pages/Home.js'

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router >
    )

}

export default Rotas