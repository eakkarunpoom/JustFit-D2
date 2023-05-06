import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cover1 from '../../../public/images/cover1.jpg';
import cover2 from '../../../public/images/cover2.jpg';
import cover3 from '../../../public/images/cover3.jpg';
import content1 from '../../../public/images/content1.jpg';
import content2 from '../../../public/images/content2.jpg';
import user from '../../../public/images/user.jpg';
import ButtonSignup from "../../component/ButtonSignup/ButtonSignup";
import './Home.css';
import Layout from "../../component/Layout/Layout";

const Home = () => {
  return (
    <div className="homepage">
      <Layout>
        <Carousel fade style={{ height: '500px' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cover1}
              alt="First slide"
              style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: '50% 70%'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cover2}
              alt="Second slide"
              style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: '50% 70%'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cover3}
              alt="Third slide"
              style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: '50% 70%' }}
            />
          </Carousel.Item>
        </Carousel>
        <div className="invite">
          <div className="container">
            <div className="title-invite">
              Crush your activities <br />goals with JustFit.
            </div>
            <div className="sub-title-invite">
              Stay motivated and on track with our powerful exercise tracker and <br />access to helpful health content.
            </div>
            <div className='btn-join-invite'>
              <Nav>
                <ButtonSignup />
              </Nav>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="top-content">
              <Row>
                <Col lg={6}>
                  <div className="text-content">
                    <div className="title-content">
                      Personalized goal tracking.
                    </div>
                    <div className="sub-title-content">
                      JustFit allows you to set customized fitness goals and track your progress towards them. This ensures that you stay motivated and focused on achieving your goals.
                    </div>
                  </div>
                </Col>
                <Col xl={6} className="col-md-7">            
                  <div className="image-content">
                    <img
                      src={content1}
                      alt="content1"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={6} className="col-md-7">            
                  <div className="image-content">
                    <img
                      src={content2}
                      alt="content2"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="text-content">
                    <div className="title-content">
                      Track your exercise progress.
                    </div>
                    <div className="sub-title-content">
                      JustFit allows you to easily track your workouts and monitor your progress towards your fitness goals. You can view your data in easy-to-read graphs and charts, making it easier to make informed decisions about your fitness routine.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="achrived">
          <div className="title-achrived">
            “I've been using JustFit for a month and <br />have already achieved my fitness goals. <br />Highly recommend!”
          </div>
          <div className="user-achrived">
            <div className="image-user">
              <img
                src={user}
                alt="Teresa Dunne"
              />
            </div>
            <div className="name-user">
              Teresa Dunne
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home;
