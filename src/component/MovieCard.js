import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({ el }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={el.url} className="img" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.year}</Card.Text>
    <h3><StarRatingComponent value={el.rate} className="rate"/></h3>
</Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
