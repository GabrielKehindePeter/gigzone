import Banner from "./banner";

const Home = () => {
    return ( 
        <div>

<Banner></Banner>
        {/* welcome mesage */}

         <div className="container-fluid" style={{background:'lightgrey',padding:'20px'}}>
            <br /><br/>
            <div className="container bg-light" style={{padding:'30px'}}>
                <div className="row">
                    <div className="col-lg-6" style={{textAlign:'justify'}}>
                         <h1 >Welcome To Gigzone</h1>
                        <p>Start Today For a Great Future</p>
                         <hr style={{border:'3px solid darkblue',width:'30%'}}/>
                        <p>
                            Limitless Experience
                            Roam Around With Your Business
                            Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise ination voluptate velit esse cillum dolore eu fugiat nulla pariatur lokaim urianewce.
                        </p>
                        <p>
                            Limitless Experience
                            Roam Around With Your Business
                            Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise ination voluptate velit esse cillum dolore eu fugiat nulla pariatur lokaim urianewce.
                        </p>
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <p><span style={{color:'green',fontSize:'30px'}}><b>3K+</b></span><br /> Active Users</p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <p><span style={{color:'darkblue',fontSize:'30px'}}><b>2K+</b></span><br /> Active jobs</p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <p><span style={{color:'red',fontSize:'30px'}}><b>310+</b></span><br /> Active Frenlancers</p>
                            </div>
                        </div>
                        <button className="btn btn-dark btn-lg">Read More</button><br /><br />
                    </div>
                    <div className="col-lg-6" >

                        
                        <img src="./bannerimg/video-img.png" className="img-fluid"/>

                       
                    </div>
                </div>
            </div>
            </div>


            {/* services */}
            <div className="bg container-fluid" style={{ backgroundImage: "url('bannerimg/banner-img.jpg')" }}>
                <div className="text-center" style={{paddingTop:'50px'}}>
                    <h1 className="text-light">Explore Our Services</h1>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-coin"></i>
                                    <p>Some text here and there! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Por</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-wallet-fill"></i>
                                    <p>Some text here and there! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Por</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-person-circle"></i>
                                    <p>Some text here and there! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Por</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-arrow-through-heart-fill"></i>
                                    <p>Some text here and there! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Por</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-bank"></i>
                                    <p>Some text here and there! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Por</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-bounding-box"></i>
                                    <p>Some text here and there! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Por</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                    </div>
                  <br />
                    <button className="btn btn-danger btn-lg">View All</button>
                </div><br /><br /><br /><br />
            </div>

            {/* about product */}

            <div className="container-fluid text-light" style={{background:'black'}}>
                <br /><br /><br /><br />
                <div className="row">
                    <div className="col-lg-6" style={{textAlign:'justify',padding:'15px'}}>
                        <h1 style={{color:"blue"}}>Limitless Experience</h1>
                        <hr style={{border:'3px solid orange',width:'40%'}}/>
                        <p>Limitless Experience Roam Around With Your Business</p>
                        <p>
                            Limitless Experience
                            Roam Around With Your Business
                            Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise ination voluptate velit esse cillum dolore eu fugiat nulla pariatur lokaim urianewce.
                        </p>
                        <p>
                            Limitless Experience
                            Roam Around With Your Business
                            Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise ination voluptate velit esse cillum dolore eu fugiat nulla pariatur lokaim urianewce.
                        </p>
                        <button className="btn btn-danger">Read More</button><br /><br />
                    </div>
                    <div className="col-lg-6">
                         <img src="./bannerimg/about-5.png" className="img-fluid" />
                       
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Home;