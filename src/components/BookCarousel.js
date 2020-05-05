import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class BookCarousel extends React.Component {

  // src={require("./images/slide-1.png")}

  render() {
    return (
      <div className="MainCarousel">
      <Carousel>
                <div>
                    <img src={require("./images/slide-1.png")} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require("./images/slide-2.png")} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require("./images/slide-3.png")} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
    );
  }
}

export default BookCarousel;