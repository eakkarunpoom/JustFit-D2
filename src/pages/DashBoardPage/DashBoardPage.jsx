import React from "react";
import Layout from "../../component/Layout/Layout";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logotitle from '../../../public/images/logotitle.png';
import "./Dashboard.css";

function DashBoardPage() {
  return (
    <Layout>
      <Container>
        <div className="detail-profile">
          <div className="title-profile">
            <h2>Hello, Karina</h2>
            <p>Keep moving & Stay Healty</p>
          </div>
           <Row className="detail-activity">
              <Col className="list-activity">
                <Row>
                  <Col>
                    <div className="duration">
                      <div className="icon-duration">
                        <img src="https://cdn-icons-png.flaticon.com/512/109/109613.png" alt="clock-duration" />
                      </div>
                      <div className="title-activity">
                        Duration
                      </div>
                      <div className="sub-title-activity">
                        1.30 Hours
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="duration">
                      <div className="icon-duration">
                        <img src="https://www.freeiconspng.com/thumbs/fire-png/fire-flame-png-images--pictures--becuo-18.png" alt="energyburn" />
                      </div>
                      <div className="title-activity">
                        Energy burn
                      </div>
                      <div className="sub-title-activity">
                        500 cal
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="duration">
                      <div className="icon-duration">
                        <img src="https://cdn.onlinewebfonts.com/svg/img_466583.png" alt="distance" />
                      </div>
                      <div className="title-activity">
                        Distance
                      </div>
                      <div className="sub-title-activity">
                        8.37 Km.
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="duration">
                      <div className="icon-duration">
                        <img src="https://www.svgrepo.com/download/35033/water-drop.svg" alt="water" />
                      </div>
                      <div className="title-activity">
                        Water
                      </div>
                      <div className="sub-title-activity">
                        2.48 Liters
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="profile-user">
                <div className="icon-user">
                  <img src={logotitle} alt="clock-duration" />
                </div>
                <div className="info-user">
                  <div className="title-user">
                    Wuttichai Kantaseema
                  </div>
                  <Row className="info">
                    <Col>
                      <div className="sub-title">
                          Height
                      </div>
                      <div className="info-height">
                          168 cm.
                      </div>
                    </Col>
                    <Col>
                      <div className="sub-title">
                          Weight
                      </div>
                      <div className="info-height">
                          45 kg.
                      </div>
                    </Col>
                    <Col>
                      <div className="sub-title">
                          Age
                      </div>
                      <div className="info-height">
                          60
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
           </Row>
        </div>
        <div className="tracking-history">
          <div className="title-tracking-history">
            Tracking History
          </div>
          <div className="dropdown-history">
            Month
          </div>
          <div className="graph-history">
            Graph
          </div>
        </div>
        <div className="activity-tracking">
          <Row>
            <Col className="create-activity">
              <div className="title-activity-tracking">Activity tracking</div>
              <div className="topic-btn-create-actity">
                <button className="btn-create-actity">Create Activity</button>
              </div>
              <div className="activity-content">
                <div className="image-activity">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5w6Knvs6OaZ9wkKlCggZXHLXIO9XRkQ4YKiPBF7dMqo6tv-l" alt="running"/>
                </div>
                <div className="detail-activity-content">
                  <div className="habit-title">
                    Runing with friend
                  </div>
                  <div className="duration-activity">
                    Duration : 30 min
                  </div>
                  <div className="energy-burn-activity">
                    Energy burn : 15 cal
                  </div>
                  <div className="descriptioin-activity">
                    Lorem activity detail
                  </div>
                </div>
                <div className="btn-edit-del">
                  <button className="edit"><img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="edit"/></button>
                  <button className="del"><img src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="del" /></button>
                </div>
              </div>
            </Col>
            <Col className="create-activity">
            <div className="title-activity-tracking">Goal tracking</div>
              <div className="topic-btn-create-actity">
                <button className="btn-create-actity">Create goal</button>
              </div>
              <div className="activity-content">
                <div className="image-activity">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5w6Knvs6OaZ9wkKlCggZXHLXIO9XRkQ4YKiPBF7dMqo6tv-l" alt="running"/>
                </div>
                <div className="activity-type">
                  Runing
                </div>
                <div className="activity-distance">
                  80 km
                </div>
                <div className="btn-goal">
                  <button className="done">Done</button>
                  <button className="cancle">Cancle</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default DashBoardPage;
