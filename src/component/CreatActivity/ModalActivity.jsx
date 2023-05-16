import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import config from "../../config";
import axios from "axios";
import './ModalActivity.css';

const ModalActivity = ({showActivityForm, handleClose}) => {

  const [activityType, setActivityType] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState(0);
  const [energyBurn, setEnergyBurn] = useState(0);
  const [distance, setDistance] = useState(0);
  const [description, setDescriptions] = useState("");

  const createActivity = () => {
    const data = {
        activityType: activityType,
        title: title,
        dateTime: date,
        duration: duration,
        energyBurn: energyBurn,
        distance: distance,
        description: description
    }

    const configAxios = {
        method: 'post',
        url: `${config.serverUrl}/api/activity`,
        headers: {  'Content-Type': 'application/json' },
        data,
    };
    try {
        axios(configAxios)
        .then((response) => {
            console.log(response.data)
        });
    } catch (error) {
        console.log(error);
    }
  }
  const handleSelect = (e) => {
    console.log(e.target.value)
    setActivityType(e.target.value);
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleDuration = (e) => {
    setDuration(e.target.value);
    setEnergyBurn(e.target.value/2);
  }

  const handleDistance = (e) => {
    setDistance(e.target.value);
  }

  const handleDescription = (e) => {
    setDescriptions(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (activityType === "" || title === "" || date === "" || duration === "" ){
      alert("Please check form")
    }else {
      createActivity();
      handleClose();
    } 
  }
    return (
      <Modal show={showActivityForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSave} className="form-activity">
              <div className="title-activities">
                <h5>Choose Activity</h5>
              </div>
                <select name="activities" id="activities" onChange={handleSelect}>
                  <option value="">Please Select</option>
                  <option value="jogging">Jogging</option>
                  <option value="abs">Abs</option>
                  <option value="yoga">Yoga</option>
                  <option value="pilates">Pilates</option>
                  <option value="zumba">Zumba</option>
                </select>
              <div className="title-activities">
                <h5>Habit Title</h5>
              </div>
              <div className="text-input">
                <input type="text" onChange={handleTitle} placeholder="Enter habit name"/>
              </div>
              <div className="date-duration">
                <div className="date">
                  <h5>Date</h5>
                  <input type="date" onChange={handleDate}/>
                </div>
                <div className="duration22">
                  <h5>Duration (min)</h5>
                  <input type="text" onChange={handleDuration} placeholder="Enter duration (minutes)"/>
                </div>
              </div>
              <div className="energy-dis">
                <div className="energy-burn">
                  <h5>Energy burn</h5>
                  <input type="text" disabled={true} value={energyBurn}/>
                </div>
                <div className="distance">
                  <h5>Distance (meter)</h5>
                  <input type="text" onChange={handleDistance} placeholder="Enter distance (meters)"/>
                </div>
              </div>
              <div className="description">
                <h5>Description</h5>
                <input type="text" onChange={handleDescription} placeholder="Enter description"/>
              </div>
              <Modal.Footer>
                <Button type="submit" style={{backgroundColor:"#712EFF", border:"none"}}>
                  Create
                </Button>
                <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"#FF4878", border:"none"}}>
                  Cancle
                </Button>
              </Modal.Footer>
            </form>
        </Modal.Body>
      </Modal>
    )
}

export default ModalActivity;