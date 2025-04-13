import React from 'react'

function About() {
  return (
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nesciunt consequatur! Repellendus repellat sit quos atque, at recusandae natus alias aperiam doloribus laboriosam tempora. Sequi in quos cum debitis doloremque!
        </p>

        <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
                        <div>
                            <div id="carouselExampleCaptions" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img  style={{height:"70vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9Kg4Tt0y1cBw2i1Ufv0epOtpJNnLL_ovdg&s" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" className="d-block w-100 " style={{height:"70vh"}} alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div> 
                                    <div className="carousel-item">
                                        <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"  style={{height:"70vh"}} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About
