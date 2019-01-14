import React, {Component} from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./SlideShowBanner.scss";

console.log(ReactCSSTransitionGroup);



export default class SlideShowBanner extends Component{
    
    constructor(props){
        super(props);
        this.loaded = false;
        this.timerID = null;
        // this.carouselDirection = null;
        this.previousIndex = null;
        this.state = {
            slideIndex: 0,
            // images: [],
            content: [
                {
                    img: require('assets/slideshow/img_01.jpg'),
                    header: `Welcome to Corcavian!`, 
                    para: '- We are designers, developers, new guys on the block and enthusiasts but most of all we make things happen.'
                },
                {
                    img: require('assets/slideshow/img_02.jpg'),
                    header: `We strive for a better tommorow.`,
                    para: `- We make sure that we put 100% passion into our work to make sure you'll leave with a smile on your face.`
                },
                {
                    img: require('assets/slideshow/img_03.jpg'),
                    header: `The Devil's in the details.`, 
                    para: '- In our work we will take the time to focus on even the smallest and most intricate details to ensure that your product is nothing but pristine perfect.'
                }
            ],
            displayContent: []
        };

        this.innerIMG = React.createRef();
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    componentDidMount() {
        if(!this.loaded){
            this.loaded = true;
        }
        this.timeOut();
    }


    timeOut(){
        this.timerID = setTimeout(() => {
            this.nextSlide();
        }, 5000);
    }

    nextSlide(){
        clearTimeout(this.timerID);
        // this.carouselDirection = 'nxt';
        this.previousIndex = this.state.slideIndex;
        if(this.state.slideIndex === this.state.content.length - 1){
            this.setState({
                slideIndex: 0
            });
        }
        else{
            this.setState({
                slideIndex: this.state.slideIndex + 1
            });
        }
        this.timeOut();
    }

    previousSlide() {
        clearTimeout(this.timerID);
        this.previousIndex = this.state.slideIndex;
        if (this.state.slideIndex === 0) {
            this.setState({
                slideIndex: this.state.content.length - 1
            });
        }
        else {
            this.setState({
                slideIndex: this.state.slideIndex - 1
            });
        }
        this.removeItem();
        this.addItem(this.state.content[this.state.slideIndex]);
        this.timeOut();
    }

    render(){

        const SlideShowSlide = ({ header, para, active, image, zIndex, i, previousIndex }) => {

            return (
                <div
                    className={`SlideShowBanner parallax ${active ? '' : (previousIndex ? '' : 'hidden')}`} style={{ zIndex: zIndex }} key={i}>
                    <div className={`SlideShowBanner__backgroundIMG ${active ? 'inAnim' : 'outAnim'}`} style={{ backgroundImage: `url(${previousIndex ? '' : image})`, backgroundSize: 'cover' }}></div>
                    <div className="SlideShowBanner__container">


                        <div className={`SlideShowBanner__container__innerIMG ${active ? 'inAnim' : 'outAnim'}`} style={{ backgroundImage: `url(${image})` }}></div>
                        <div className="SlideShowBanner__container__content">
                            <div className={`SlideShowBanner__container__content__text ${active ? 'inAnim' : 'outAnim'}`}>
                                <div className="header">{`${header}`}</div>
                                <div className="footnote">{`${para}`}</div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        };
        
        return(
            <div className="SlideShowWrapper">

                <div className="mobileControls">
                    <div className="mobileControls__arrow Previous">
                        <span className="fa fa-long-arrow-left" onClick={this.previousSlide}></span>
                    </div>
                    <div className="mobileControls__arrow Next">
                        <span className="fa fa-long-arrow-right" onClick={this.nextSlide}></span>
                    </div>
                </div>

                <div className="absolute">
                    <div className="SlideShowBanner__CircleContainer">
                        <div className="SlideShowBanner__CircleContainer__Circle">
                        
                            <div className="SlideShowBanner__CircleContainer__Circle__Arrow Previous">
                                <span className="fa fa-long-arrow-left" onClick={this.previousSlide}></span>
                            </div>

                            <div className="SlideShowBanner__CircleContainer__Circle__Arrow Next">
                                <span className="fa fa-long-arrow-right" onClick={this.nextSlide}></span>
                            </div>

                        </div>
                    </div>
                </div>
                {this.props.children}
                {this.state.content.map((v,i)=>{

                    let active = i === this.state.slideIndex ? true : false;
                    let zi = `${!this.loaded ? (i !== this.state.slideIndex ? -1 : 1) : (i !== this.state.slideIndex ? 1 : 0)}`;
                    let activeHidden = null;
                    let previousIndex = this.previousIndex === i ? true : false;

                    return(
                        <SlideShowSlide active={active} previousIndex={previousIndex} header={v['header']} para={v['para']} image={v['img']} zIndex={zi} i={i}/>
                    );
                })}
            </div>
        )
    }

}


