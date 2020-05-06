import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
const CarouselItem = (props) => {
  return (
    <div>
      <img src={props.book_image} alt={props.title} />
      <p className="legend">
        Rank # {props.rank}, {props.title}, by: {props.author}{" "}
      </p>
      <p>
        <a href={props.buy_links} target="_blank" rel="noopener noreferrer">
          Buy here
        </a>
      </p>
    </div>
  )
}
class BookCarousel extends React.Component {
  state = {fetchResults: null}
  componentDidMount() {
    this.fetchNYT()
  }
  fetchNYT = async () => {
    const url =
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fpnTOSJ6F3L9K84O6rAe6HPoya5eevbT"
    const res = await fetch(url)
    const bestSellers = await res.json()
    this.setState({fetchResults: bestSellers})
  }
  render() {
    return (
      <div className="MainCarousel">
        <div>
          NYT Best sellers list, Top{" "}
          {this.state.fetchResults &&
            this.state.fetchResults.results.books.length}
        </div>
        <Carousel>
          {this.state.fetchResults &&
            this.state.fetchResults.results &&
            this.state.fetchResults.results.books.map((book) => {
              return (
                <CarouselItem
                  key={book.title}
                  rank={book.rank}
                  title={book.title}
                  book_image={book.book_image}
                  author={book.author}
                  buy_links={book.buy_links[0].url}
                />
              )
            })}
        </Carousel>
      </div>
    )
  }
}
export default BookCarousel