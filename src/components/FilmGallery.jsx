import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Button, Spinner } from "react-bootstrap";

class FilmGallery extends Component {
  state = {
    films: [],
    error: null,
    loading: true,
  };

  fetchFilms = () => {
    const myUrl = "http://www.omdbapi.com/?apikey=f690f01f&s=";
    const { titlePart } = this.props;
    this.setState({ loading: true });
    fetch(myUrl + titlePart)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch films");
        }
      })
      .then((data) => {
        this.setState({ films: data.Search, loading: false });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
        this.setState({ error: error.message });
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { films, error, loading } = this.state;
    return (
      <Container fluid className="bg-primary text-light pt-4">
        {error && <div>Error: {error}</div>}
        {loading && <Spinner animation="border" variant="dark"></Spinner>}
        <h4 className="text-start ms-2">{this.props.titlePart}</h4>
        <Row
          sm={1}
          md={3}
          lg={4}
          xl={6}
          className="g-2 justify-content-center "
        >
          {films.slice(0, 6).map((film, index) => (
            <Col key={index}>
              <div className="image-container">
                <img
                  src={film.Poster}
                  alt={film.Title}
                  className="mt-1 w-75 h-100 anima"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FilmGallery;
