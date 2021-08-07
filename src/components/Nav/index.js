import './nav.css'
import { Link } from 'react-router-dom'

export default function Nav(props){
    
    return <div className="nav">
        <span><Link to="/">Login</Link></span>
        <span><Link to="/home">{props.home}</Link></span>
        <span><Link to="/contact"> {props.contact}</Link></span>
        <span><Link to="/about">  { props.about}</Link></span>        
        <span><Link to="/datatable"> { props.datatable}</Link></span>
    </div>
    
}














//export default class Nav extends React.Component {
//    constructor() {
//      super();
//      this.state = {
//        show: true,
//        scrollPos: 0
//      };
//    }
//    componentDidMount() {
//      window.addEventListener("scroll", this.handleScroll);
//    }
//    componentWillUnmount() {
//      window.removeEventListener("scroll", this.handleScroll);
//    }
//    handleScroll = () => {
//      // console.log(document.body.getBoundingClientRect());
//      this.setState({
//        scrollPos: document.body.getBoundingClientRect().top,
//        show: document.body.getBoundingClientRect().top > this.state.scrollPos
//      });
//    };
//    render() {
//      console.log(this.state);
//      return <nav className={this.state.show ? "active" : "hidden"}>Navbar</nav>;
//    }
//  }













//import React, { useState } from 'react';
//import {
//  Carousel,
//  CarouselItem,
//  CarouselControl,
//  CarouselIndicators,
//  CarouselCaption
//} from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//
//const items = [
//  {
//    src: require('../../Images/img.1.png'),
//    altText: 'Slide 1',
//    caption: 'Slide 1'
//  },
//  {
//    src: require('../../Images/img.2.jpg'),
//    altText: 'Slide 2',
//    caption: 'Slide 2'
//  },
//  {
//    src: require('../../Images/img.1.png'),
//    altText: 'Slide 3',
//    caption: 'Slide 3'
//  }
//];
//
//const Nav = (props) => {
//  const [activeIndex, setActiveIndex] = useState(0);
//  const [animating, setAnimating] = useState(false);
//
//  const next = () => {
//    if (animating) return;
//    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//    setActiveIndex(nextIndex);
//  }
//
//  const previous = () => {
//    if (animating) return;
//    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//    setActiveIndex(nextIndex);
//  }
//
//  const goToIndex = (newIndex) => {
//    if (animating) return;
//    setActiveIndex(newIndex);
//  }
//
//  const slides = items.map((item) => {
//    return (
//      <CarouselItem
//        onExiting={() => setAnimating(true)}
//        onExited={() => setAnimating(false)}
//        key={item.src}
//      >
//        <img src={item.src} alt={item.altText}  />
//        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//      </CarouselItem>
//    );
//  });
//
//  return (
//    <Carousel
//      activeIndex={activeIndex}
//      next={next}
//      previous={previous}
//  >
//      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//      {slides}
//      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//    </Carousel>
//  );
//}
//
//export default Nav;