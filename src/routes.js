import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './App.js';
import Home from './components/pages/Home.js'
import Personagens from './components/pages/Personagens.js'
import Quadrinhos from './components/pages/Quadrinhos.js'
import Criadores from './components/pages/Criadores.js'
import Eventos from './components/pages/Eventos.js'
import Series from './components/pages/Series.js'
import Stories from './components/pages/Stories.js'

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/personagens" element={<Personagens />} />
                <Route path="/home/quadrinhos" element={<Quadrinhos />} />
                <Route path="/home/criadores" element={<Criadores />} />
                <Route path="/home/eventos" element={<Eventos />} />
                <Route path="/home/series" element={<Series />} />
                <Route path="/home/stories" element={<Stories />} />
            </Routes>
        </Router >
    )

}

export default Rotas