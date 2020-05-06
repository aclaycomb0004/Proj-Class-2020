import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class BookCarousel extends React.Component {
  state = {fetchResults: null}
  componentDidMount() {
    this.fetchNYT();
}
fetchNYT = async () => {
  const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fpnTOSJ6F3L9K84O6rAe6HPoya5eevbT"
  const res = await fetch(url)
  const bestSellers = await res.json()
  this.setState({fetchResults: bestSellers})
  console.log("bestSellers", bestSellers)
}
  render() {
    console.log("Alyssa", this.state)
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