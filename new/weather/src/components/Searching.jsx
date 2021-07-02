import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

import '../style/index.css';

import Details from './Details';

const Searching = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedCity(e.target.value);
  };
  const handleClick = () => {
    getWeather(selectedCity);
  };

  const getWeather = async (setSelectedCity) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=5a17452b42ea63a877f8f2b5ea332bf5`
      );
      let res = await response.json();
      console.log(res);
      setResults(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <InputGroup size="lg" className="searching-bar">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Type your location..."
                onChange={handleChange}
                className="input-style"
              />
              <Button className="button-style" onClick={handleClick}>
                Let's check!
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      {selectedCity && results && <Details data={results} />}
    </>
  );
};
export default Searching;
