//import images
import header_logo from "./../../assets/img/dc-logo.png"


//import data
import menu from "./../../data/header_nav_menu"

export default function AppHeader() {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className = "img-fluid" src={header_logo} alt="DC Comics Logo"  width="80"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                            <ul className="navbar-nav nav-underline column-gap-4">
                                {
                                    menu.map(item =>
                                        <li key = {item.id}>
                                            <a href = {item.href} className = {`nav-link ${(item.is_active)?'active':''} py-5 px-0 text-uppercase fw-bold border-5`}>
                                                {item.text}
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}