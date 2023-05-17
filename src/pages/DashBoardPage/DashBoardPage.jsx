import React from "react";
import Layout from "../../component/Layout/Layout";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
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
        <div className="top-sum">
          <div className="sum-name-user">
                Hello, Moss
          </div>
          <div className="sum-caption">
            Keep moving & Stay Healty
          </div>
        </div>
        <Row className="sum-activity">
          <Col className="sum-content">
            <div className="top-sum-content">
              <div className="duration-content">
                <div className="image-sum-duration">
                  <img src="https://cdn-icons-png.flaticon.com/512/7313/7313700.png" alt="duration" />
                </div>
                <div className="title-sum-duration">
                  Duration
                </div>
                <div className="sum-duration">
                  1.30 Hours
                </div>
              </div>
              <div className="duration-content">
                <div className="image-sum-energy">
                  <img src="https://static.vecteezy.com/system/resources/previews/020/522/257/original/fire-emoji-icon-free-png.png" alt="energy burn" />
                </div>
                <div className="title-sum-duration">
                  Energy burn
                </div>
                <div className="sum-duration">
                  500 Cal
                </div>
              </div>
            </div>
            <div className="bot-sum-content">
              <div className="duration-content">
                <div className="image-sum-dis">
                  <img src="https://cdn.onlinewebfonts.com/svg/img_466583.png" alt="distance" />
                </div>
                <div className="title-sum-duration">
                  Distance
                </div>
                <div className="sum-duration">
                  8.37 Km.
                </div>
              </div>
              <div className="duration-content">
                <div className="image-sum-goal">
                  <img src="https://static.vecteezy.com/system/resources/previews/018/923/203/original/gold-trophy-symbol-icon-png.png" alt="goal" />                </div>
                <div className="title-sum-duration">
                  Goal
                </div>
                <div className="sum-duration">
                  2 Goal
                </div>
              </div>
            </div>
          </Col>
          <Col className="profile-content">
            <div className="image-user">
              <img src="https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg" alt="person"/>
            </div>
            <div className="name-user-profile">
              Moss Eakkarunpoom
            </div>
            <div className="detail-user-profile">
              <div className="height-user-profile">
                <div className="title-height">
                  Height
                </div>
                <div className="sum-height">
                  168 cm
                </div>
              </div>
              <div className="weight-user-profile">
                <div className="title-weight">
                  Weight
                </div>
                <div className="sum-weight">
                  60 kg
                </div>
              </div>
              <div className="age-user-profile">
                <div className="title-age">
                  Age
                </div>
                <div className="sum-age">
                  23
                </div>
              </div>
            </div>
          </Col>
        </Row>
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
          <Row style={{gap:"16px", alignItems:"baseline"}}>
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
