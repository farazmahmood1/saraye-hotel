import React from 'react'

const Info = () => {
    return (
        <div>


            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
                            <figure className="img-absolute">
                                <img src="images/food-1.jpg" alt="Image" className="img-fluid" />
                            </figure>
                            <img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
                            <h2 className="heading">Welcome!</h2>
                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><a href="#" className="btn btn-primary text-white py-2 mr-3">Learn More</a> <span className="mr-3 font-family-serif"><em>or</em></span> <a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="text-uppercase letter-spacing-1">See video</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe className="gmap_iframe" width="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=1300&height=400&hl=en&q=Safari Hotel Jail Road, Lahore&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
                        <a href="https://strandsgame.net/">Strands</a>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}" }} />
                </div>
            </section>
        </div>
    )
}

export default Info