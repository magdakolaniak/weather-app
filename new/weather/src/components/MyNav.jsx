import { Navbar, Container } from 'react-bootstrap';
const MyNav = () => {
  return (
    <Navbar bg="light" variant="light" className="nav-style">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.png"
            alt="icon"
            className="nav-img"
          />{' '}
          <span className="nav-title"> Sunny or Cloudy? </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default MyNav;
