import React from 'react';
import img1 from "../images/b1.jpg"
import img2 from "../images/b2.jpg"
import img3 from "../images/b3.jpg"
import img4 from "../images/b4.jpg"
import apps from "../images/apps.jpg"
class BestOfKenya extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div className="what_we_do best_of_kenya">
            <div className="row m-0">
                <div className="col-12 p-0">
                <h1 className="text-center">Best of kenya</h1><br/>
                </div>
            </div>
           <div className="row m-0 ">
              
            <div className="col-12 col-sm-12 col-md-3 p-0 text-center">
            <img className="" src={img1}/>
                   <div className="what_we_do_content">
                   <h3>The Kenya's Best Night Clubs</h3>
                    <p>From Blue Door in Nairobi through to
country watering holes. Kenya’s up
country locals are more than just
pints—people, culture etc</p>
                   </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 p-0">
            <img className="" src={img2}/>
            <div className="what_we_do_content">
                   <h3>Best Events In Kenya
</h3>
                    <p>Get to know some of the very best
events in the country from high-end
joints, casinos, night clubs, bars,
restaurants and local pubs.</p>
                   </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 p-0">
            <img className="" src={img3}/>
            <div className="what_we_do_content">
                   <h3>Your Guide To Mombasa</h3>
                    <p>This Coastal city bustles with liveliness
music haunts and quirky cocktail bars
- along with some very cool people
and hang out joints.</p>
                   </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 p-0">
            <img className="" src={img4}/>
            <div className="what_we_do_content">
                   <h3>Fun Things To Do
                    </h3>
                    <p>Making your way around the country
and fancy something unique to do?
Find a list of the best right here.</p>
                   </div>
            </div>
            </div> 

<div className="row m-0 app_section">
    <div className="col-12 col-sm-12 col-md-5">
    <img className="" src={apps}/>
    </div>
    <div className="col-12 col-sm-12 col-md-7">
        <h1>Take the night with you</h1>
        <p>Simply nd exclusive experiences, buy and access tickets fast. You can also
shop everything you need for your next great night out and share with your
friends through the NiteOut Kenya Mobile App.</p>
    </div>
</div>

        </div>
    

         );
    }
}
 
export default BestOfKenya;