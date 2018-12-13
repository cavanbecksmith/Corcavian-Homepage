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
        this.nextSlide = this.nextSlide.bind(this);
    }

    componentDidMount() {}

    nextSlide(){

        if(this.state.slideIndex === this.state.images.length - 1){
            this.setState({
                slideIndex: 0
            });
        }
        else{
            this.setState({
                slideIndex: this.state.slideIndex + 1
            });
        }
    }


    render(){
        return(
            <div style={{width: '100%', height: '100%'}}>

                <button style={{zIndex: 1000, position: "absolute",}} onClick={this.nextSlide}>sdfsdf</button>

                {this.state.images.map((v,i)=>{

                    let opacity;
                    let containerClasses = "SlideShowBanner__container";
                    let backgroundClasses = "SlideShowBanner__backgroundIMG";

                    if(i !== this.state.slideIndex){
                        opacity = 0;
                    }
                    else{
                        opacity = 1;
                        containerClasses += " inAnim";
                        backgroundClasses += " inAnim";
                    }

                    return(
                        <div
                            className="SlideShowBanner"
                            style={{
                                opacity: opacity
                            }}
                            key={i}
                        >

                            <div 
                                className={backgroundClasses}
                                style={{
                                    backgroundImage: `url(${this.state.images[i]})`,
                                    backgroundSize: 'cover'
                                }}
                            ></div>

                            <div className={containerClasses}>
                                <div
                                    className="SlideShowBanner__container__innerIMG"
                                    style={{backgroundImage: `url(${this.state.images[i]})`,}}></div>
                            </div>
                        </div>
                    );

                })}
            </div>
        )
    }

}