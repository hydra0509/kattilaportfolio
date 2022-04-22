import React,{useState, useContext} from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import blog from './images/blog.png'
import crypto from './images/crypto.png'
import facerecognition from './images/facerecognition.png'
import kntur from './images/kntur.png'
import rps from './images/rps.png'
import weatherapp from './images/weatherapp.png'
import { ThemeContext } from "./ThemeContext";




function Cardsites() {

  const { theme } = useContext(ThemeContext);


  return (
    <Container fluid className={theme}>
    <Row xs="true" xxs="true" sm="true" md="true" lg="3" xxl="3" xxxl="3" xl="3">
      <Col className="card-container">
        <Card className={`Card ${theme}`}>
        <a href="https://hydra0509.github.io/facerecognition/" target="_blank"> <Card.Img  className="card-img" variant="top" src={facerecognition} /></a>
          <Card.Body>
            <Card.Title className="card-title">Face recognition</Card.Title>
            <Card.Text>
             A face recognition application using the <a href="https://www.clarifai.com/" target="_blank">Clarifai</a> API.<br></br>It works with direct image links.
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>

   
      
      <Col className="card-container">
        <Card className={`Card ${theme}`}>
         <a href="https://hydra0509.github.io/Cryptotracker/" target="_blank"> <Card.Img className="card-img-bitcoinapp" variant="top" src={crypto} /></a>
          <Card.Body>
            <Card.Title>Crypto currency tracker</Card.Title>
            <Card.Text>
             A crypto currency tracker made with the <a href="https://www.coingecko.com/" target="_blank">Coingecko</a> API.<br></br>
             I used the Axios NPM package to manage API data and the design is made with React Bootstrap.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


      <Col className="card-container">
        <Card className={`Card ${theme}`}>
          <a href="https://hydra0509.github.io/blog/" target="_blank"><Card.Img className="card-img" variant="top" src={blog} /></a>
          <Card.Body>
            <Card.Title>Blog</Card.Title>
            <Card.Text>
             A blog made with the <a href="https://jsonplaceholder.typicode.com/" target="_blank" >JSONPlaceholder API</a>.<br></br>
             I used Axios to manage API data and React Router with dynamic id's for different pages.There is a button to turn data into real,running on a server (on my computer if its turned on) made with Express JS which I'm currently learning.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


      <Col className="card-container">
        <Card className={`Card ${theme}`}>
          <a href="https://hydra0509.github.io/portfoliopage/" target="_blank" ><Card.Img className="card-img-bitcoinapp" variant="top" src={kntur} /></a>
          <Card.Body>
            <Card.Title>Kntúr.</Card.Title>
            <Card.Text>
             A portfolio page I made for my Graphic Designer friend.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="card-container">
        <Card className={`Card ${theme}`}>
         <a href="https://hydra0509.github.io/Rockpaperscissors/" target="_blank"> <Card.Img className="card-img" variant="top" src={rps} /></a>
          <Card.Body>
            <Card.Title>Rock,Paper,Scissors game</Card.Title>
            <Card.Text>
             I did not use React for this site,its made entirely in Javascript,HTML and CSS.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="card-container">
        <Card className={`Card ${theme}`}>
          <a href="https://hydra0509.github.io/weatherapp/" target="_blank"><Card.Img className="card-img" variant="top" src={weatherapp} /></a>
          <Card.Body>
            <Card.Title className="card-title">Weather Application</Card.Title>
            <Card.Text className="card-text">
             A simple weather application made with the <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> API.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

    </Row>
    </Container>
  );
}

export default Cardsites;
