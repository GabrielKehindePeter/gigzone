const HowItWorks = () => {
    return ( 
    <div>
        <div  className="container-fluid" style={{ backgroundImage: "url('bannerimg/img-02.jpg')" }}>
            <div className="row">
                <div className="col-lg-12">
                     <h1><span style={{display:'block',fontSize:'65px',color:'white',paddingTop:'70px'}}><b>How It Work?</b></span>
                    <span style={{color:'blue', fontSize:'20px'}}>Gigzone | How It Work</span></h1>
                        <br /><br />
                 </div>
            </div>
        </div>
        
        {/* how it work */}
        <div className="container text-bg-light">
            <div className="row">
                <div className="col-lg-5" style={{padding:'0px'}}>
                    <img src="./img/connection.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-7" style={{marginTop:'50px', textAlign:'left'}}>
                    <h1>How To Start Hiring</h1>
                    <p>Start Today For a Great Future
                        <hr style={{border:'3px solid red', width:'35%'}}/>
                    </p><br /><br />
                    <p>
                        Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid learn more
                    </p>

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                    </div>

                    <br /><br />
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default HowItWorks;