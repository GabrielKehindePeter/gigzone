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
                            At GigZone, we believe in the power of micro-jobs and freelancing to transform lives. Whether you're looking to earn extra income or need quick help with tasks, GigZone is your go-to platform.
                        </p>
                        <p>
                            Our mission is simple: connect freelancers with businesses and individuals who need tasks completed efficiently. From social media engagement, app surveys, and simple online tasks, we make freelancing easy, secure, and rewarding.
                        </p>
                        <p>
                            
                            With a user-friendly interface, secure escrow payments, and a growing network of skilled freelancers, GigZone is redefining how people work and hire in Africa
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
                                    <p>Task posting and managements (clients can post tasks, edit them, delete and verify if they are satisfied by what the freelancer did)</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-wallet-fill"></i>
                                    <p>Wallet and payment system (users can deposit and withdraw funds)</p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-person-circle"></i>
                                    <p>Ratings and reviews, after any completed task that has been verified by a client, freelancers receive a point </p>
                                    <a href="#">Learn More</a><br/><br />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="services">
                                    <br />
                                    <i className="service-icon bi bi-arrow-through-heart-fill"></i>
                                    <p>Payments per task (every task as a certain price attached depends on the category and subcategory it falls under)</p>
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

            <div className="container-fluid text-light" style={{background:'rgb(46, 45, 45)'}}>
                <br /><br /><br /><br />
                <div className="row">
                    <div className="col-lg-6" style={{textAlign:'justify',padding:'15px'}}>
                        <h1 style={{color:"blue"}}>Getting Started is Easy!</h1>
                        <hr style={{border:'3px solid orange',width:'40%'}}/>
                        <p>Getting Started is Easy!</p>
                        {/* <p>
                            Gigzone is a micro-tasking platform, where users can complete small online tasks (e.g social media engagement, surveys e.t.c) in exchange for their services, they get paid. This platform is a medium to connects clients (Task posters) and freelancers (Task doers)
                        </p>
                        <p>
                            Gigzone will be launcing as a web-based platform that connects users for both posting and completion on micro tasks. It will support the escrow-based payments to ensure a fair and safe payment for each task completed.
                        </p> */}


                        <p style={{padding:'10px',fontSize:'15px'}}>
                            
                            Are you ready to turn your social media time into cash? Follow these steps:<br /><br />

                            👉 Step 1: Click Sign Up Now to create your free account.<br /><br />
                            👉 Step 2: Start completing tasks and earning money immediately.<br /><br />
                            👉 Step 3: Withdraw your earnings and enjoy extra income!<br /><br />

                            🚀 Join thousands of others who are already making money with GigZone! 🚀<br /><br />

                            💡 Don’t waste another minute scrolling for free—turn your social media activity into real income today!
                        </p>
                        <button className="btn btn-danger">Try It Our Today</button><br /><br />
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