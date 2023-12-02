import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

function Mycard() {
  return (
   <div className="info"> 
   <Card style={{width: '50rem'}}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Gurukripa Residential Coaching Campus With School</Card.Title>
        <Card.Text>
          Gurukripa has opened a Residential Coaching Campus in Sikar, aming to provide comphrensive,
          interactive, and efficient care for foundation courses students. The campus features earthquake 
          resistant construation, modern architecture, and 24 hour power backup 
          and water supply
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{width: '50rem'}}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Computer Lab</Card.Title>
        <Card.Text>
          Gurukripa Career Institute offers an ultra-modern computer laboratory with 500
          computers, offering skipped lectures and online weekly tests for engineering and 
          medical entrance exams.
        </Card.Text>
        {/* <Button variant="primary">Enter Gallery</Button> */}
      </Card.Body>
    </Card>
    <Card style={{width: '50rem'}}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Study of Art Library</Card.Title>
        <Card.Text>
          Our Library offers over 5000 book, including latest physics, chemistry, zoology, botany
          , and mathematics, as well as autobiographies. It provides a quiet, purposeful
           atmosphere for study and intellectual creativity.
        </Card.Text>
        <Button variant="primary">Enter Gallery</Button>
      </Card.Body>
    </Card>
    </div>
    
   
  );
}

export default Mycard;