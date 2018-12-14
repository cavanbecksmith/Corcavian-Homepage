import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./SlideShowBanner.scss";

export default class SlideShowBanner extends Component{
    
    constructor(props){
        super(props);
        this.loaded = false;
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

    componentDidMount() {
        // --- Prevents the animation from running before the component has mounted
        this.loaded = true;
    }

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

                <button style={{zIndex: 1000, position: "absolute"}} onClick={this.nextSlide}>sdfsdf</button>

                {this.state.images.map((v,i)=>{

                    let opacity = 1;
                    let wrapperClass = "SlideShowBanner";
                    let containerClasses = "";
                    let backgroundClasses = "SlideShowBanner__backgroundIMG";
                    let innerIMGClass = "SlideShowBanner__container__innerIMG"
                    let zIndex;

                    if(this.loaded){
                        if (i !== this.state.slideIndex) {
                            zIndex = 1;
                            innerIMGClass += " outAnim";
                            backgroundClasses += " outAnim"
                            wrapperClass += " hide";
                        }
                        else {
                            zIndex = 0;
                            innerIMGClass += " inAnim";
                            backgroundClasses += " inAnim";
                        }
                    }

                    return(
                        <div
                            className={wrapperClass}
                            style={{
                                zIndex
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

                            <div className="SlideShowBanner__container">
                                <div
                                    className={innerIMGClass}
                                    style={{backgroundImage: `url(${this.state.images[i]})`,}}></div>
                            </div>
                        </div>
                    );



                })}
            </div>
        )
    }

}