const Banner = () => {
    return ( 
         <div  className="container-fluid" style={{ backgroundImage: "url('bannerimg/banner-img.jpg')",marginTop:'50px' }}>
            <div className="row">
                <div className="col-lg-4">
                    <br />
                    {/*  <img src="../bannerimg/img-01.png" className="img-fluid d-none d-md-block" /> */}
    <img src={`${process.env.PUBLIC_URL}/bannerimg/img-01.png`} className="img-fluid d-none d-md-block" />


                </div>
                <div className="col-lg-8 text-light" style={{textAlign:'left',marginTop:'40px'}}>	<br /><br />	
                    <h1><span style={{display:'block',fontSize:'65px'}}>Make Money Online</span>
                    <span style={{color:'blue'}}>Earn as much as you can online</span></h1>
                    <p>
                    Earn money by completing simple tasks or find skilled freelancers to get things done fast! GigZone gives freelancers the opportunity to complete micro social tasks and get paid for it.
                    </p>
                    <button className="btn btn-primary btn-lg">Get Started</button>
                    <br /><br />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
