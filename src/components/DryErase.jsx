import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./componentCSS/Polaroid.css";

const polaroids = [
    {
    title: "Winter Fever",
    description: "Life in motion during a busy afternoon.",
    imageUrl: "trees.png",
  },
  {
    title: "Lodge",
    description: "Golden hour captured from a downtown rooftop.",
    imageUrl: "lodge.png",
  },
  {
    title: "Buttering",
    description: "Candid shot from a quiet cafe in the morning.",
    imageUrl: "buttering.png",
  },
  
  // Add more as needed
];

const MarkerGallery = () => {
  return (
    <Container className="polaroid-gallery py-5">
      <h1 className="text-center mb-4">Polaroid Series I - Winter</h1>
      <Row className="g-4 justify-content-center">
        {polaroids.map((photo, idx) => (
          <Col key={idx} xs={12} sm={8} md={6} lg={4}>
            <Card className="polaroid-card text-center shadow-sm">
              <Card.Img
                variant="top"
                src={photo.imageUrl}
                className="polaroid-image"
              />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>{photo.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MarkerGallery;
