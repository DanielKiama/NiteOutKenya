import React from 'react';
import Logo from "../images/logo.jpg"

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 

                <div>
                    <header>
                       <div className="container">
                           <div className="row hide_on_mobile">
                               <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="humb_icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <img className="logo" src={Logo}/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <ul className="left_section_nav">
                                            <li className="first_icon">
                                           <i class="fa fa-facebook" aria-hidden="true"></i>
                                            </li>
                                            <li>
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                            </li>
                                            <li>
                                            <i class="fa fa-twitter" aria-hidden="true"></i>  
                                            </li>
                                            <li>
                                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                               
                               </div>
                               <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <ul className="top_right_nav">
                                        <li>Login</li>
                                        <li>Signup</li>
                                        <li>Tickets</li>
                                        <li>Shop</li>
                                    </ul>
                               </div>
                           </div>
                     {/* mobile nav */}

                     <div className="row hide_on_large">
                               <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="humb_icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <img className="logo" src={Logo}/>
                                    </div>
                                </div>

                               
                               </div>
                             </div>
                     

                              {/* end mobile nav   */}
                       </div>
                    </header>
                    <div className="top_advert" >
                   
                    <div className="">
                        <p className="text-center p-3 m-0">
                       <strong>Your health and safety is our #1 priority. <a href="">CLICK HERE</a> for info about event cancellations, postponements, and refunds due to the Coronavirus/COVID-19. Dismiss</strong> 
                        </p>
                        </div>
                  
                      
                    </div>
                </div>
         );
    }
}
 
export default Header;