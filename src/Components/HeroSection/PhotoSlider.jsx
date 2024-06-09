import React from 'react'

const PhotoSlider = () => {
  return (
    <div>
           <section className="section slider-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-md-7">
                                <h2 className="heading" data-aos="fade-up">Photos</h2>
                                <p data-aos="fade-up" data-aos-delay={100}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-slider major-caousel owl-carousel mb-5" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="slider-item">
                                        <a href="images/slider-1.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-1.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                    </div>
                                    <div className="slider-item">
                                        <a href="images/slider-2.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-2.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                    </div>
                                    <div className="slider-item">
                                        <a href="images/slider-3.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-3.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                    </div>
                                    <div className="slider-item">
                                        <a href="images/slider-4.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-4.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                    </div>
                                    <div className="slider-item">
                                        <a href="images/slider-5.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-5.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                    </div>
                                    <div className="slider-item">
                                        <a href="images/slider-6.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-6.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                    </div>
                                    <div className="slider-item">
                                        <a href="images/slider-7.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-7.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                    </div>
                                </div>
                                {/* END slider */}
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default PhotoSlider