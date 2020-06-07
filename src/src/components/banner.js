import React from 'react';
import video from "../images/sample.mp4"
import ScrollAnimation from 'react-animate-on-scroll';
import cream from "../images/cream.jpg"
import tusker from "../images/tusker.jpg"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
class Banner extends React.Component {
    
    state = {  }
    render() { 
        
        return ( 

            <banner>
               <div className="">
                   <div className="row m-0">
                  
                       <div className="col-12 col-sm-12 col-md-9 p-0 video_section">
                         
                         <video autoplay="autoplay" loop="loop">
                             <source src={video} type="video/mp4" />
                        </video>
                           <div className="video_content ">
                                <div className="">
                                <ScrollAnimation animateIn="bounce">
                                <h1>Find Experiences
                            Just For You</h1>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                            <h2>Discover, Book and Enjoy bespoke experience.
                            We front absolutely everything Kenya has to
                            offer in matters night life.</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInUp">
                            <div className="form_section">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-2">
                                        <h2>Looking for:</h2>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-5 p-0">
                                    <form className>
                                    <input className="form-control" type="text" placeholder="Bars, Restaurants, Clubs, Pubs, Lounges, Casinos"/>
                                    </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-5 p-0">
                                    <input className="form-control lighter_bg" type="text" placeholder="WHAT’S ON"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-2">
                                        <h2>Where:</h2>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-5">
                                    <InputLabel id="label">Location</InputLabel>
                                    <Select labelId="label" id="select" label="dc" >
                                    <MenuItem value="10">Nairobi</MenuItem>
                                    <MenuItem value="20">Mombasa</MenuItem>
                                    <MenuItem value="30">Naivasha</MenuItem>
                                    <MenuItem value="40">Kitui</MenuItem>
                                    <MenuItem value="50">Eldoret</MenuItem>
                                    <MenuItem value="60">Mombasa</MenuItem>
                                    </Select>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-5">
                                    <form  noValidate>
                                    <TextField
                                        id="date"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </form>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-sm-12 col-md-2">
                                        <h2>Others:</h2>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-5">
                                    <form className>
                                    <Button className="discover" variant="contained" color="primary">
                                    DISCOVER $ BOOK
                                    </Button>                
                                   </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-5">
                                    <Button variant="contained" color="primary">
                                    DOWNLOAD APP

                                    </Button>
                                    </div>
                                </div>
                               
                            </div>

                            </ScrollAnimation>
                                </div>
                           </div>
                 
                       </div>
                   
                       <div className="col-12 col-sm-12 col-md-3 banner_right_section">
                       <img className="" src={cream}/>
                       <img className="" src={tusker}/>
                       </div>
                   </div>
               </div>
            </banner>
         );
    }
}
 
export default Banner;