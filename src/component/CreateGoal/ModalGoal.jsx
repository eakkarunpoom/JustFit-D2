import { Modal, Button } from "react-bootstrap";
import './ModalGoal.css';
import axios from "axios";
import config from "../../config";
import { useState } from "react";

const ModalGoal = ({showGoalForm, handleCloseModal}) => {
    const [activityType, setActivityType] = useState("");
    const [deadline, setDeadline] = useState();
    const [duration, setDuration] = useState(0);
    const [energyBurn, setEnergyBurn] = useState(0);
    const [distance, setDistance] = useState(0);
    const createGoal = () => {
        const data = {
            activityType: activityType,
            deadline: deadline,
            energyBurn: energyBurn,
            duration: duration,
            distance: distance,
            status: "none"
        }
    
        const configAxios = {
            method: 'post',
            url: `${config.serverUrl}/api/goal`,
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

      const handleDate = (e) => {
        setDeadline(e.target.value);
      }
    
      const handleDuration = (e) => {
        setDuration(e.target.value);
        setEnergyBurn(e.target.value/2);
      }
    
      const handleDistance = (e) => {
        setDistance(e.target.value);
      }
    

      const handleSave = (e) => {
        e.preventDefault();
        if (activityType === "" || duration === ""){
          alert("Please check form")
        }else {
          createGoal();
          handleCloseModal();
        } 
      }

    return (
        <Modal show={showGoalForm} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Goal</Modal.Title>
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
              <div className="dead-line">
                <div className="title-dead-line">
                  <h5>Deadline</h5>
                </div>
                <div className="date-deadline">
                  <input type="date" onChange={handleDate}/>
                </div>
              </div>
              <div className="energy-dis-dura">
                <div className="energy-burn">
                  <h5>Energy burn</h5>
                  <input type="text" disabled={true} />
                </div>
                <div className="distance">
                  <h5>Distance</h5>
                  <input type="text" placeholder="Enter distance (meters)" onChange={handleDistance}/>
                </div>
                <div className="duration22">
                  <h5>Duration</h5>
                  <input type="text" placeholder="Enter duration (minutes)" onChange={handleDuration}/>
                </div>
              </div>
              <Modal.Footer>
                <Button type="submit" style={{backgroundColor:"#712EFF", border:"none"}}>
                  Create
                </Button>
                <Button variant="secondary" onClick={handleCloseModal} style={{backgroundColor:"#FF4878", border:"none"}}>
                  Cancle
                </Button>
              </Modal.Footer>
            </form>
        </Modal.Body>
      </Modal>
    )
}

export default ModalGoal;