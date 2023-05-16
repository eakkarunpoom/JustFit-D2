import React from "react";
import Layout from "../../component/Layout/Layout";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logotitle from '../../../public/images/logotitle.png';
import "./Dashboard.css";
import { useState } from "react";
import ModalActivity from "../../component/CreatActivity/ModalActivity";
import ModalGoal from "../../component/CreateGoal/ModalGoal";
import ListActivity from "../../component/ListActivity/ListActivity";
import ListGoal from "../../component/ListGoal/ListGoal";

function DashBoardPage() {
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);

  const handleClose = () => {
    setShowActivityForm(false)
  };

  const handleShow = () => {
    setShowActivityForm(true)
  };

  const handleCloseModal = () => {
    setShowGoalForm(false);
  }

  const handleShowModal = () => {
    setShowGoalForm(true);
  }

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
                  <a href="/profile"><img src={logotitle} alt="clock-duration" /></a>
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
                <button className="btn-create-actity" onClick={handleShow}>Create Activity</button>
              </div>
                <ListActivity showActivityForm={showActivityForm} />
            </Col>
            <Col className="create-activity">
            <div className="title-activity-tracking">Goal tracking</div>
              <div className="topic-btn-create-actity">
                <button className="btn-create-actity" onClick={handleShowModal}>Create goal</button>
              </div>
              <ListGoal />
            </Col>
          </Row>
        </div>
      </Container>
      {/* Modal */}
      <ModalActivity showActivityForm={showActivityForm} handleClose={handleClose} />
      <ModalGoal showGoalForm={showGoalForm} handleCloseModal={handleCloseModal}/>
    </Layout>
  );
}

export default DashBoardPage;
