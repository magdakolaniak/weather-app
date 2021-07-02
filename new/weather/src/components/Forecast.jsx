import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/index.css';
import celsius from '../helper';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

const Forecast = ({ details }) => {
  let lat = details.lat;
  let lon = details.lon;
  const [detail, setDetail] = useState(null);

  const getForecast = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5a17452b42ea63a877f8f2b5ea332bf5`
      );
      let res = await response.json();
      console.log('Details are here:', res.daily);
      setDetail(res.daily);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    getForecast();
  };
  return (
    <>
      <Container className="home-page-main">
        <Button onClick={handleClick}> </Button>
        {detail != null ? (
          <>
            <Row>
              {detail !== null &&
                detail.map((el) => (
                  <Col md={2}>
                    <Row>
                      <Col md={12}>
                        <div>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                              alt="icon"
                              className="forecast-icon-url"
                            />
                          </span>
                          <span>{celsius(el.temp.day)}°</span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <div className="my-own">
                          <span>
                            <ImArrowUp />
                            {celsius(el.temp.max)}°
                          </span>
                          <span>
                            <ImArrowDown />
                            {celsius(el.temp.min)}°
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}
            </Row>
          </>
        ) : (
          <span>nope</span>
        )}
      </Container>
    </>
  );
};
export default Forecast;
