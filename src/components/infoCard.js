import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './infoCard.css'

export default function Card2() {
  return (
    <div className="info">
      <Card style={{width: '50rem'}}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Dear Students</Card.Title>
        <Card.Text>
        As the Director of Gurukripa Career Institute, I echo the words of Malcolm X: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
Since our inception in 2007, we have dedicated ourselves to helping you succeed in top engineering and medical entrance examinations. Thousands have benefited from our personalized attention, not only excelling in exams but also gaining valuable knowledge for their future journeys.
I commend our exceptional faculty and staff for their unwavering commitment to nurturing your minds and helping you triumph in entrance tests. Beyond academic success, we equip you to face the future with resilience, turning failures into stepping stones for future triumphs.
To those who have succeeded, congratulations! To those who faced setbacks, remember, succes favors perseverance. We pledge to redouble our efforts to guide every student not just in exams bu the broader test of life.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}
