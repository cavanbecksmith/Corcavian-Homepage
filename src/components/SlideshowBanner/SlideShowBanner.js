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

    nextSlide(){
        console.log(this.state);
        // this.setState((state, props) => {
        //     return { slideIndex: slideIndex++ };
        // });
        this.setState({
            slideIndex: this.state.slideIndex + 1
        });

    }

    // previousSlide() {}

    render(){
        return(
            <div style={{width: '100%', height: '100%'}}>

                <button style={{zIndex: 1000, position: "absolute",}} onClick={this.nextSlide}>sdfsdf</button>

                {this.state.images.map((v,i)=>{

                    let opacity;

                    if(i !== this.state.slideIndex){
                        opacity = 0;
                    }
                    else{
                        opacity = 1;
                    }

                    return(
                        <div
                            className="SlideShowBanner"
                            style={{
                                backgroundImage: `url(${this.state.images[i]})`,
                                backgroundSize: 'cover',
                                opacity: opacity
                            }}
                            key={i}
                        >
                            <div className="SlideShowBanner__container">
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