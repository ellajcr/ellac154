import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  useEffect(() => {
    const quotes = document.querySelectorAll('.quote, .quote-1');
    let currentIndex = 0;

    function wiggleNextQuote() {
      // Remove wiggle from the previous quote
      quotes.forEach((quote, index) => {
        if (index !== currentIndex) {
          quote.classList.remove('wiggle-animation');
        }
      });

      // Add wiggle to the current quote
      quotes[currentIndex].classList.add('wiggle-animation');

      // Move to the next quote
      currentIndex = (currentIndex + 1) % quotes.length;

      // Continue looping
      setTimeout(wiggleNextQuote, 2000); // 2 seconds for each quote
    }

    // Start the wiggle loop
    wiggleNextQuote();
  }, []);

  return (
    <div className="card-container">
      <Card className="custom-card grow-spin">
        <Card.Body className="outline">
          <div className="title-container">
            <img src={require('./star.gif')} alt="star" className="star" />
            <Card.Title className="title">Welcome To CSE 154</Card.Title>
            <img src={require('./star.gif')} alt="star" className="star" />
          </div>
          <Row className="content">
            <Card.Text className="intro">
              Hi I'm Ella! I'm a senior majoring in Informatics and Food
              Systems. Some things I love include jumping in the nearest body of
              water, climbing, assorted fruits, and time with friends. This is
              my second quarter TAing for this class, and it's been so much fun!
              Having taken this class with almost no front end experience, I can
              say it is absolutely doable. But it helps to ask for questions!
              Everyone here is friendly and ready to help so don't hesitate to
              reach out. The skills you learn here are a great foundation for so
              many other classes.
            </Card.Text>
            <Col md={6} className="advice">
              <Card.Text className="sub-title">Advice Column</Card.Text>
              <Card.Text className="advice-sub">
                Don't go it alone! Check out just a few of the awesome{' '}
                <a href="https://huskylink.washington.edu/organizations">
                  RSOs on campus
                </a>
                :
              </Card.Text>
              <ul className="rso-list">
                <li>
                  <img src={require('./tack.png')} className="tack" />
                  <a
                    href="https://www.instagram.com/dubstechuw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DubsTech
                  </a>
                </li>
                <li>
                  <img src={require('./tack.png')} className="tack" />
                  <a
                    href="https://www.rethinkuw.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rethink
                  </a>
                </li>
                <li>
                  <img src={require('./tack.png')} className="tack" />
                  <a
                    href="https://students.washington.edu/uwdfa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Design For America
                  </a>
                </li>
                <li>
                  <img src={require('./tack.png')} className="tack" />
                  <a
                    href="https://www.peaksandprofessorsuw.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Peaks and Professors
                  </a>
                </li>
                <li>
                  <img src={require('./tack.png')} className="tack" />
                  <a
                    href="https://www.instagram.com/uwwinfo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WINFO
                  </a>
                </li>
                <li>
                  <img src={require('./tack.png')} className="tack" />
                  <a
                    href="https://www.instagram.com/climbingclubatuw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Climbing Club
                  </a>
                </li>
                <li>
                  <img src={require('./tack.png')} className="tack" />
                  <a
                    href="https://www.instagram.com/uwwinfo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Husky Coding Project
                  </a>
                </li>
              </ul>
              <img
                src={require('./flamingoes.webp')}
                alt="group of flamingoes"
                className="flamingoes"
              />
            </Col>
            <Col className="divider">
              <Card.Text className="sub-title">Famous Quotes</Card.Text>
              <ul className="quote-list">
                <li className="quote">"Go to section!"</li>
                <li className="quote-1">"Come to office hours!"</li>
                <li className="quote">
                  "If you have a question, someone else probably has the same
                  one"
                </li>
                <li className="quote-1">
                  "inner.HTML should ONLY be used to clear content"
                </li>
                <li className="quote">"Start early; submit early"</li>
                <li className="quote-1">"Use alt tags for all images"</li>
                <li className="quote">
                  "Before you submit, reread the spec AND code quality guide"
                </li>
                <li className="quote-1">"Be curious and have fun"</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div class="cat-container">
        <div class="cat-box">
          <img src={require('./image.png')} className="cat" />
        </div>
      </div>
    </div>
  );
}

export default App;
