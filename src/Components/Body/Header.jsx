import React,{useState} from 'react'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className="site-header js-site-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-6 col-lg-4 site-logo" data-aos="fade"><a href=''>SARAYE.CO</a></div>
                        <div className="col-6 col-lg-8">
                            <div className="site-menu-toggle js-site-menu-toggle" data-aos="fade">
                                <span />
                                <span />
                                <span />
                            </div>
                            <div className="site-navbar js-site-navbar">
                                <nav role="navigation">
                                    <div className="container">
                                        <div className="row full-height align-items-center">
                                            <div className="col-md-6 mx-auto">
                                                <ul className="list-unstyled menu">
                                                    <li className="active"><a >Home</a></li>
                                                    <li><a >Rooms</a></li>
                                                    <li><a >About</a></li>
                                                    <li><a >Events</a></li>
                                                    <li><a >Contact</a></li>
                                                    <li><a >Reservation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header