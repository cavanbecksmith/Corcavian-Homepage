import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./SlideShowBanner.scss";

export default class SlideShowBanner extends Component{
    
    constructor(props){
        super(props);
        this.state = { 
            slideIndex: 0, 
            images: [
                require('assets/slideshow/img_01.jpg'),
                require('assets/slideshow/img_02.jpg'),
                require('assets/slideshow/img_03.jpg'),
            ]
        };
    }

    componentDidMount() {}

    nextSlide(){}

    previousSlide() {}

    render(){
        return(
            <div style={{width: '100%', height: '100%'}}>

                {this.state.images.map((v,i)=>{

                    return(
                        <div
                            className="SlideShowBanner"
                            style={{
                                backgroundImage: `url(${this.state.images[i]})`,
                                backgroundSize: 'cover'
                            }}
                            key={i}
                        >
                            <div className="SlideShowBanner__container">
                                <div
                                    className="SlideShowBanner__container__innerIMG"
                                    style={{ backgroundImage: `url(${this.state.images[i]})` }}></div>
                            </div>
                        </div>
                    );

                })}
            </div>
        )
    }

}