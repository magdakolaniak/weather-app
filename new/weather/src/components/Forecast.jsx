import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/index.css';
import celsius from '../helper';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import Moment from 'react-moment';

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
        {detail === null ? (
          <div>
            <Button onClick={handleClick} className="button-style-forecast">
              {' '}
              Check next days!{' '}
            </Button>
          </div>
        ) : (
          <div className="forecast-header">Forecast for upcoming days</div>
        )}

        {detail != null ? (
          <>
            <Row>
              {detail !== null &&
                detail.slice(1, 7).map((el) => (
                  <Col md={2}>
                    <Row>
                      <Col md={12}>
                        <Moment unix format="ddd" className="dates-forecast">
                          {el.dt}
                        </Moment>
                        <div>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                              alt="icon"
                              className="forecast-icon-url"
                            />
                          </span>
                          <span className="forecast-degrees deg">
                            {celsius(el.temp.day)}°
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <div className="my-own">
                          <span className="forecast-max">
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
          <span></span>
        )}
      </Container>
    </>
  );
};
export default Forecast;
