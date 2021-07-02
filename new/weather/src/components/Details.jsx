import { Container, Row, Col } from 'react-bootstrap';
import '../style/index.css';
import celsius from '../helper';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { BsDropletHalf } from 'react-icons/bs';
import { CgArrowsMergeAltV } from 'react-icons/cg';
import { GiWindSlap } from 'react-icons/gi';

import Forecast from '../components/Forecast.jsx';

const Details = ({ data }) => {
  return (
    <>
      <Container className="home-page-main">
        <Row className="title">
          <Col md={8}>Current Weather</Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="city">{data.name}</span>
            <div>
              <span>
                {' '}
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="weather"
                  className="weather-icon"
                />
              </span>
              <span className="main-temp">{celsius(data.main.temp)}°</span>
            </div>
            <div className="sky-description">{data.weather[0].description}</div>
          </Col>
          <Col md={6}>
            <div className="main-temp-left">
              Feels like {celsius(data.main.feels_like)}°
            </div>
            <div className="main-features-title">
              <span>
                <ImArrowUp className="weather-icons" />{' '}
                <span className="deg">{celsius(data.main.temp_max)}°</span>
              </span>
              <span>
                {' '}
                <ImArrowDown className="weather-icons" />{' '}
                <span className="deg">{celsius(data.main.temp_min)}° </span>
              </span>
            </div>
            <div className="main-features">
              <span>
                {' '}
                <BsDropletHalf className="weather-icons" />{' '}
                <span className="results-description"> Humidity </span>
                <span className="results">{data.main.humidity} %</span>
              </span>
            </div>
            <div className="main-features">
              <span>
                {' '}
                <GiWindSlap className="weather-icons" />{' '}
                <span className="results-description-wind">Wind </span>
                <span className="results">{data.wind.speed} kpH</span>
              </span>
            </div>
            <div className="main-features">
              <span>
                {' '}
                <CgArrowsMergeAltV className="weather-icons" />{' '}
                <span className="results-description">Pressure </span>
                <span className="results">{data.main.pressure} hPa </span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Forecast details={data.coord} />
    </>
  );
};
export default Details;
