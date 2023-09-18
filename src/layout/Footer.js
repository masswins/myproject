import React from "react";

function Footer(){

  return(
      <div className="main-footer text-center text-lg-start" >
          <div className="container">
            <div className="row" >
              {/*Column 1*/}
              <div className="col-md-3 col-sm-6">
                <h4>info</h4>
                <ul class="list-unstyled">
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                </ul>
              </div>
              {/*Column 2*/}
              <div className="col-md-3 col-sm-6">
                <h4>info</h4>
                <ul class="list-unstyled">
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                </ul>
              </div>
              {/*Column 4 social networks*/}
              <div className="col-md-3 col-sm-6">
                <h4>we online</h4>
                <ul class="list-unstyled">
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                  <li><a href="#">info</a></li>
                </ul>
              </div>
              
              
              </div>
              {/*Footer Bottom*/}
              <div className="footer-bottom">
                <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} Buisness Control App - All Rigths Reserved
                </p>
              </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" >
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
          <a href="" target="_blank"><i class="bi bi-whatsapp"></i></a>
            {/*<MDBIcon fab icon="facebook-f" />
          
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
  */}
        </div>
      
          </div>
      </div>
      );
  }
      export default Footer;

      // <span>
      //Some text for footer; All rights reserved to VladiCorp
      //</span>