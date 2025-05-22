import Carousel from 'react-bootstrap/Carousel';


function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="me.jpg" alt="Augustine Jacob"/> <Carousel.Caption>
          <h3>Picture 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slides;