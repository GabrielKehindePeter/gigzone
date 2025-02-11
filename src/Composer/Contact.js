const Contact = () => {
    return ( 
        <div>
                    <div  className="container-fluid" style={{ backgroundImage: "url('bannerimg/img-02.jpg')" }}>
            <div className="row">
                <div className="col-lg-12">
                     <h1><span style={{display:'block',fontSize:'65px',color:'white',paddingTop:'70px'}}><b>Contact Us</b></span>
                    <span style={{color:'blue', fontSize:'20px'}}>Gigzone | Contact Us</span></h1>
                        <br /><br />
                 </div>
            </div>
        </div>
        

             <section id="contact-page" class="pt-90 pb-120 gray-bg">
        <div class="container" style={{marginTop:'60px'}}>
            <div class="row">
                <div class="col-lg-8">
                    <div class="contactForm">
                        <div class="section-title">
                            <br />
                            <h5>Contact Us</h5>
                            <h1>Keep in touch</h1>
                        </div>
                        <div >
                            <form id="contact-form" action="#" method="post" data-toggle="validator">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="singel-form form-group">
                                            <input name="name" className="form-control" type="text" placeholder="Your name" required="required" /> 
                                        </div> 
                                    </div>
                                    <div class="col-md-6">
                                        <div class="singel-form form-group">
                                            <input name="email" type="email" className="form-control"  placeholder="Email" required="required" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="singel-form form-group">
                                            <input name="subject" type="text" className="form-control"  placeholder="Subject" data-error="Subject is required." required="required" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="singel-form form-group">
                                            <input name="phone" type="text" className="form-control"  placeholder="Phone" data-error="Phone is required." required="required" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="singel-form form-group">
                                            <textarea name="messege" className="textea-control"  placeholder="Messege" data-error="Please,leave us a message." required="required"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <p class="form-message"></p>
                                    <div class="col-md-12">
                                        <div class="singel-form">
                                            <button type="submit" className="btn btn-dark btn-lg">Send</button><br /><br />
                                        </div>  
                                    </div> 
                                </div>  
                            </form>
                        </div>  
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="contact-address">
                        <div class="contact-heading">
                            <h5>Address</h5>
                            <p>If you have any further questions, please don’t hesitate to contact us.</p>
                        </div>
                         <p className="contact-p">
                            <i className="bi bi-geo-alt-fill contact-icon"></i> 143 castle road 517 district, kiyev port south Canada
                         </p>
                         <p className="contact-p">
                            <i className="bi bi-telephone-fill contact-icon"></i> 08130146023, 08293939334
                         </p>
                         <p className="contact-p">
                            <i className="bi bi-envelope contact-icon"></i> info@gigzone.com
                         </p>
                         <p className="contact-p">
                            <i className="bi bi-globe contact-icon"></i>gigzone.com
                         </p>
                    </div>  
                
                </div>
            </div>  
        </div> 
        </section>
        </div>
     );
}
 
export default Contact;