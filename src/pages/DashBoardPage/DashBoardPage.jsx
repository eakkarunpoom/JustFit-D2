import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import Layout from "../../component/Layout/Layout";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./Dashboard.css";
import ModalActivity from "../../component/CreatActivity/ModalActivity";
import ModalGoal from "../../component/CreateGoal/ModalGoal";
import ListActivity from "../../component/ListActivity/ListActivity";
import ListGoal from "../../component/ListGoal/ListGoal";

function DashBoardPage() {
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [goal, setGoal] = useState([]);
  const [name, setName ] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [photoUrl] = useState(localStorage.getItem('photoURL'))
  
  const xAccessToken = localStorage.getItem('xAccessToken')
  const getGoal = () => {
    const configAxios = {
        method: 'get',
        url: `${config.serverUrl}/api/goal`,
        headers: {
            'x-access-token': xAccessToken
        }
    };
    try {
        axios(configAxios)
        .then((response) => {
            setGoal(response.data.data)
        });
    } catch (error) {
        console.log(error);
    }
  }
  const getUser = () => {
    const configAxios = {
        method: 'get',
        url: `${config.serverUrl}/api/user`,
        headers: {
            'x-access-token': xAccessToken
        }
    };
    try {
        axios(configAxios)
        .then((response) => {
            console.log(response.data.data)
            if(response.data.data.length === 0 ){
                setName('Default name')
                setGender('Default')
                setAge(0)
                setHeight(0)
                setWeight(0)
            } else {
                setName(response.data.data[0]['name'])
                setGender(response.data.data[0]['gender'])
                setAge(response.data.data[0]['age'])
                setHeight(response.data.data[0]['height'])
                setWeight(response.data.data[0]['weight'])
            }
        });
    } catch (error) {
        console.log(error);
    }
  }

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

  const renderGoal = () => {
    const sumGoal = goal.reduce((accumulator, currentValue) => {
      if (currentValue.status === "done"){
        accumulator = {
          duration: accumulator.duration + currentValue.duration,
          energyBurn: accumulator.energyBurn + currentValue.energyBurn,
          distance: accumulator.distance + currentValue.distance,
          goal: accumulator.goal + 1,
        }
        return accumulator
      }
      else {
        return accumulator
      }
    }, { duration: 0, energyBurn: 0, distance: 0, goal: 0 })
    return sumGoal
  }

  const convertDuration = () => {
    const timeDuration = renderGoal().duration/60
    console.log(timeDuration)
    const hours = Math.floor(timeDuration);
    const minutes = Math.round((timeDuration-hours) * 60);
    return hours + ":" + minutes 
  }

  useEffect(()=>{
    getGoal();
    getUser();
  },[]);

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
                  {convertDuration()} Hours
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
                  {renderGoal().energyBurn} Cal
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
                  {renderGoal().distance/1000} Km.
                </div>
              </div>
              <div className="duration-content">
                <div className="image-sum-goal">
                  <img src="https://static.vecteezy.com/system/resources/previews/018/923/203/original/gold-trophy-symbol-icon-png.png" alt="goal" />                </div>
                <div className="title-sum-duration">
                  Goal
                </div>
                <div className="sum-duration">
                  {renderGoal().goal} Goal
                </div>
              </div>
            </div>
          </Col>
          <Col className="profile-content">
            <div className="image-user">
              <a href="/profile"><img src={photoUrl} alt="person"/></a>
            </div>
            <div className="name-user-profile">
              {name}
            </div>
            <div className="detail-user-profile">
              <div className="height-user-profile">
                <div className="title-height">
                  Height
                </div>
                <div className="sum-height">
                  {height} cm
                </div>
              </div>
              <div className="weight-user-profile">
                <div className="title-weight">
                  Weight
                </div>
                <div className="sum-weight">
                  {weight} kg
                </div>
              </div>
              <div className="age-user-profile">
                <div className="title-age">
                  Age
                </div>
                <div className="sum-age">
                  {age}
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
              <ListGoal goal={goal} getGoal={getGoal} showGoalForm={showGoalForm}/>
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
