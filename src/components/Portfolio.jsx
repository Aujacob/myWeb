import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Portfolio.css";
import {Link} from "react-router-dom";

const portfolioItems = [
  {
    title: "Polaroid Series I",
    description: "Candid moments captured in natural lighting with a vintage aesthetic.",
    imageUrl: "apartment.png",
    slug: "polaroid",
    
  },
  {
    title: "Pencil Sketches",
    description: "Explorations of identity and emotion through bold lines and shading.",
    imageUrl: "semi_nude.jpg",
    slug: "pencil",
  },
  {
    title: "Acrylic paintings",
    description: "Mixed-media experiments combining analog scans and digital manipulation.",
    imageUrl: "pom.png",
    slug: "acrylic",
  },

  {
    title: "Dry Erase Art",
    description: "Mixed-media experiments combining analog scans and digital manipulation.",
    imageUrl: "gojo.png",
    slug: "acrylic",
  },
  // Add more entries as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper d-flex min-vh-100">
      <div className="portfolio-left d-flex flex-column justify-content-center align-items-center p-4 text-center">
         <img
          src="me_in_suit.png"
          alt="Augustine Jacob"
          style={{ maxWidth: '200px', height: 'auto' }}
        />
        
        <h1 className="portfolio-title">Augustine Jacob</h1>
        <p className="portfolio-subtitle">Artist Portfolio</p>
        <Button href="/" className="back-button mt-2">
          Back to Home
        </Button>
      </div>

      <div className="portfolio-right flex-grow-1 p-5">
        <Container fluid>
          <h2 className="portfolio-header mb-4">My Work</h2>
          <Row className="g-4">

            {portfolioItems.map((item, idx) => (
              
              <Col key={idx} xs={12} sm={6} md={4} lg={4}>
                <Link to={`/${item.slug}`} className="text-decoration-none text-dark">
                  <Card className="portfolio-card h-100">
                    <Card.Img variant="top" src={item.imageUrl} alt={item.title} />

                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>

                  </Card>
                </Link>
              </Col>
             
            ))}


          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Portfolio;
