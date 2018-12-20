import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./SlideShowBanner.scss";
import "css/fontawesome.css";

export default class SlideShowBanner extends Component{
    
    constructor(props){
        super(props);
        this.loaded = false;
        this.state = {
            // offsetY: null,
            slideIndex: 0,
            images: [
                require('assets/slideshow/img_01.jpg'),
                require('assets/slideshow/img_02.jpg'),
                require('assets/slideshow/img_03.jpg')
            ],
            text: [
                {
                    header: `Welcome to Corcavian!`, para: '- We are designers, developers, new guys on the block and enthusiasts but most of all we make things happen.'
                },
                {
                    header: `We strive for a better tommorow.`, para: `- We make sure that we put 100% passion into our work to make sure you'll leave with a smile on your face.`
                },
                {
                    header: `The Devil's in the details.`, para: '- In our work we will take the time to focus on even the smallest and most intricate details to ensure that your product is nothing but pristine perfect.'
                }
            ]
        };
        this.innerIMG = React.createRef();
        this.nextSlide = this.nextSlide.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // --- Prevents the animation from running before the component has mounted
        this.loaded = true;
        this.timeOut();

        // --- Scrolling Stuff
        // window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }
    
    timeOut(){
        setTimeout(() => {
            this.nextSlide();
            this.timeOut();
        }, 5000);
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

    // SCROLL
    handleScroll(){
        console.log('Scroll', window.pageYOffset, this.innerIMG);
        let translate3d;
    }


    previousSlide() {

        if (this.state.slideIndex === -1) {
            this.setState({
                slideIndex: this.state.images.length - 1
            });
        }
        else {
            this.setState({
                slideIndex: this.state.slideIndex - 1
            });
        }
    }

    render(){
        return(
            <div className="SlideShowWrapper">

                <div className="mobileControls">
                    <div className="mobileControls__arrow Previous">
                        <span className="fa fa-long-arrow-left"></span>
                    </div>
                    <div className="mobileControls__arrow Next">
                        <span className="fa fa-long-arrow-right"></span>
                    </div>
                </div>

                <div className="absolute">
                    <div className="SlideShowBanner__CircleContainer">
                        <div className="SlideShowBanner__CircleContainer__Circle">
                        
                            <div className="SlideShowBanner__CircleContainer__Circle__Arrow Previous">
                                <span className="fa fa-long-arrow-left"></span>
                            </div>

                            <div className="SlideShowBanner__CircleContainer__Circle__Arrow Next">
                                <span className="fa fa-long-arrow-right"></span>
                            </div>

                        </div>
                    </div>
                </div>

                {this.props.children}

                <button style={{zIndex: 1000, position: "absolute"}} onClick={this.nextSlide}>sdfsdf</button>

                {this.state.images.map((v,i)=>{

                    let opacity = 0;
                    let wrapperClass = "SlideShowBanner parallax";
                    let containerClasses = "";
                    let backgroundClasses = "SlideShowBanner__backgroundIMG";
                    let innerIMGClass = "SlideShowBanner__container__innerIMG";
                    let textWrapper = "SlideShowBanner__container__content__text";
                    let zIndex;

                    if(this.loaded){
                        if (i !== this.state.slideIndex) {
                            zIndex = 1;
                            innerIMGClass += " outAnim";
                            backgroundClasses += " outAnim"
                            wrapperClass += " hide";
                            textWrapper += " outAnim";
                        }
                        else {
                            zIndex = 0;
                            innerIMGClass += " inAnim";
                            backgroundClasses += " inAnim";
                            textWrapper += " inAnim";
                        }
                    }
                    else{
                        if (i !== this.state.slideIndex){
                            // Prevent the animation from being seen 
                            // but still present to hide slides
                            zIndex = -1;
                            innerIMGClass += " outAnim";
                            backgroundClasses += " outAnim"
                            wrapperClass += " hide";
                            textWrapper += " outAnim";
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

                            {/* <div className="SlideShowBanner__overlay"></div> */}

                            {/* Circle component */}

                            <div className="SlideShowBanner__container">

                                {/* Inner Background IMG */}
                                <div
                                    className={innerIMGClass}
                                    style={{backgroundImage: `url(${this.state.images[i]})`,}}
                                    ref={this.innerIMG}></div>
                                
                                {/* RHS Content */}
                                <div className="SlideShowBanner__container__content">
                                    <div className={textWrapper}>
                                        <div className="header">{`${this.state.text[i].header}`}</div>
                                        <div className="footnote">{`${this.state.text[i].para}`}</div>
                                    </div>
                                </div>
                                {/*  */}

                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

}