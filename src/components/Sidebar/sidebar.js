import './sidebar.css';
import logo from '../../assets/marvel-logo.png'
import logo2 from '../../assets/marvel-logo-unlimited.png'
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
                <div className='sidebar-texts'>
                    <div className="sidebar-character">
                        <p>personagens</p>
                    </div>
                    <div className="sidebar-comics">
                        <p>quadrinhos</p>
                    </div>
                    <div className="sidebar-creators">
                        <p>criadores</p>
                    </div>
                    <div className="sidebar-events">
                        <p>eventos</p>
                    </div>
                    <div className="sidebar-series">
                        <p>series</p>
                    </div>
                    <div className="sidebar-stories">
                        <p>stories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar