import './sidebar.css';
import logo from '../../assets/marvel-logo.png'
import logo2 from '../../assets/marvel-logo-unlimited.png'
import Navbar from '../navbar/navbar';
function Sidebar() {

    return (
        <div className="container-sidebar">
            <div className="container-top">
                <div className="name-sidebar">
                    <p>Olá, JOÃO</p>
                </div>
                <div className="logo-sidebar"><img alt='#' src={logo} /></div>
                <div className="logo-sidebar-2">
                    <img alt='#' src={logo2} />
                    <div className='text-sidebar'>
                        <p>MARVEL UNLIMITED</p>
                        <p>INSCREVA-SE</p>
                    </div>

                </div>
            </div>
            <div className="container-bottom">
            <Navbar />
            </div>
        </div>
    )
}

export default Sidebar