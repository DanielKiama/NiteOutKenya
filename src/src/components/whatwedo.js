import React from 'react';
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
class WhatWeDo extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="what_we_do">
                <div className="row m-0">
                    <div className="col-12 p-0">
                    <ScrollAnimation animateIn="fadeIn">
                    <h1 className="text-center">What we do</h1><br/>
                    </ScrollAnimation>
                    </div>
                </div>
               <div className="row m-0 ">
              
                <div className="col-12 col-sm-12 col-md-4 p-0 text-center">
                <ScrollAnimation animateIn="slideInLeft">
                <img className="" src={img1}/>
                       <div className="what_we_do_content">
                       <h2>Events & Offers</h2>
                        <p>Wondering what’s going on nearby?
                            NiteOut Kenya curates a list of events
                            and oers happening in your
                            city around Kenya</p>
                       </div>
                       </ScrollAnimation>
                </div>
               
                <div className="col-12 col-sm-12 col-md-4 p-0">
                <ScrollAnimation animateIn="slideInUp">
                <img className="" src={img2}/>
                <div className="what_we_do_content">
                       <h2>Book & Pay</h2>
                        <p>Book and pay for a table at the hottest
                        nightclubs, lounges, event spaces,
                        bars, locals, casion in your city with a few taps.
                        Set it o and make it a night to remember!</p>
                       </div>
                       </ScrollAnimation>
                </div>
                <div className="col-12 col-sm-12 col-md-4 p-0">
                <ScrollAnimation animateIn="slideInRight">
                <img className="" src={img3}/>
                <div className="what_we_do_content">
                       <h2>Tickets & Guestlists
                        </h2>
                        <p>One tap signup for free and
                        is counted to guestlists.
                        Buy tickets on your phone –
                        no printing required!</p>
                       </div>
                    </ScrollAnimation>
                </div>
                </div> 
            </div>
         );
    }
}
 
export default WhatWeDo;