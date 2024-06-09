import React from 'react'

const Testimonials = () => {
    return (
        <div>

            <section className="section testimonial-section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-7">
                            <h2 className="heading" data-aos="fade-up">People Says</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="js-carousel-2 owl-carousel mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img src="images/person_1.jpg" alt="Image placeholder" className="rounded-circle mx-auto" />
                                </div>
                                <blockquote>
                                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
                                </blockquote>
                                <p><em>— Jean Smith</em></p>
                            </div>
                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img src="images/person_2.jpg" alt="Image placeholder" className="rounded-circle mx-auto" />
                                </div>
                                <blockquote>
                                    <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
                                </blockquote>
                                <p><em>— John Doe</em></p>
                            </div>
                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img src="images/person_3.jpg" alt="Image placeholder" className="rounded-circle mx-auto" />
                                </div>
                                <blockquote>
                                    <p>“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.”</p>
                                </blockquote>
                                <p><em>— John Doe</em></p>
                            </div>
                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img src="images/person_1.jpg" alt="Image placeholder" className="rounded-circle mx-auto" />
                                </div>
                                <blockquote>
                                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
                                </blockquote>
                                <p><em>— Jean Smith</em></p>
                            </div>
                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img src="images/person_2.jpg" alt="Image placeholder" className="rounded-circle mx-auto" />
                                </div>
                                <blockquote>
                                    <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
                                </blockquote>
                                <p><em>— John Doe</em></p>
                            </div>
                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img src="images/person_3.jpg" alt="Image placeholder" className="rounded-circle mx-auto" />
                                </div>
                                <blockquote>
                                    <p>“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.”</p>
                                </blockquote>
                                <p><em>— John Doe</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimonials