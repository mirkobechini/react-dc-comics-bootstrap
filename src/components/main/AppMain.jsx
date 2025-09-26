import BandIcon from "./BandIcon/BandIcon"


export default function AppMain() {
    return (
        <>
            <div id="jumbotron" className="container-fluid py-5 ">

            </div>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col position-relative">
                        <span id = "floatingLabel" className="bg-primary border-primary text-light text-decoration-none text-uppercase fw-bold fs-3 px-3 py-2 position-absolute" >current series</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="row text-center ">
                    <div className="col my-2 py-4">
                        <a className="bg-primary border-primary text-light text-decoration-none text-uppercase fw-bold fs-6 px-5 py-2" href="#">load more</a>
                    </div>
                </div>
            </div>
            <BandIcon/>

        </>
    )
}