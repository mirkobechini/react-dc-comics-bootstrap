
//menu data
import banner_list from './../../data/footer_banner_menu';
//banner
import dcLogoBackground from './../../assets/img/dc-logo-bg.png'

export default function FooterJumbo() {
    return (
        <>
            <div id="footerJumbo">
                <div className="container">
                    <div className="p-5 mb-4">
                        <div className="row py-5 justify-content-start">
                            <div className="col-7 row">
                                {banner_list.map(menu =>
                                    <section className='col' key={menu.id}>

                                        <h3 className="text-white text-uppercase fs-4">{menu.title} </h3>
                                        <ul>
                                            {menu.list.map(list_item =>
                                                <li key={list_item.id}>
                                                    <a className='text-capitalize text-secondary text-decoration-none' href={list_item.href} >{list_item.text}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </section>
                                )}
                            </div>
                            <div className="col-5">
                                <img src={dcLogoBackground} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}