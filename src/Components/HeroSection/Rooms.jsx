import React from 'react'

const Rooms = () => {
  return (
    <div>
        <section className="section">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-md-7">
                                <h2 className="heading" data-aos="fade-up">Our Top 3 Partners</h2>
                                <p data-aos="fade-up" data-aos-delay={100}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4" data-aos="fade-up">
                                <a href="#" className="room">
                                    <figure className="img-wrap">
                                        <img src="images/img_1.jpg" alt="Free website template" className="img-fluid mb-3" />
                                    </figure>
                                    <div className="p-3 text-center room-info">
                                        <h2>Single Room</h2>
                                        <span className="text-uppercase letter-spacing-1">90$ / per night</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4" data-aos="fade-up">
                                <a href="#" className="room">
                                    <figure className="img-wrap">
                                        <img src="images/img_2.jpg" alt="Free website template" className="img-fluid mb-3" />
                                    </figure>
                                    <div className="p-3 text-center room-info">
                                        <h2>Family Room</h2>
                                        <span className="text-uppercase letter-spacing-1">120$ / per night</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4" data-aos="fade-up">
                                <a href="#" className="room">
                                    <figure className="img-wrap">
                                        <img src="images/img_3.jpg" alt="Free website template" className="img-fluid mb-3" />
                                    </figure>
                                    <div className="p-3 text-center room-info">
                                        <h2>Presidential Room</h2>
                                        <span className="text-uppercase letter-spacing-1">250$ / per night</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Rooms