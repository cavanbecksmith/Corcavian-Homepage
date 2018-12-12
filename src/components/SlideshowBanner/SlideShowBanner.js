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
            <div 
            className="SlideShowBanner" 
            style={{
                backgroundImage: `url(${this.state.images[0]})`,
                backgroundSize: 'cover'
            }}
            >
                <div className="SlideShowBanner__container"></div>
            </div>
        )
    }

}