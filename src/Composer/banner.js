const Banner = () => {
    return ( 
         <div  className="container-fluid" style={{ backgroundImage: "url('../bannerimg/banner-img.jpg')" }}>
            <div className="row">
                <div className="col-lg-4">
                    <br />
                    <img src="../bannerimg/img-01.png" className="img-fluid d-none d-md-block" />

                </div>
                <div className="col-lg-8 text-light" style={{textAlign:'left',marginTop:'40px'}}>	<br /><br />	
                    <h1><span style={{display:'block',fontSize:'65px'}}>Hire expert freelancers</span>
                    <span style={{color:'blue'}}>Earn As Much Online</span></h1>
                    <p>
                        Consectetur adipisicing elit sed dotem eiusmod tempor incuntes ut labore etdolore maigna aliqua enim incuntes ut labore etdolore maigna aliqua enim.
                    </p>
                    <button className="btn btn-primary btn-lg">Get Started</button>
                    <br /><br />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
