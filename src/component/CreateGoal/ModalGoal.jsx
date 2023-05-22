import { Modal, Button } from "react-bootstrap";
import './ModalGoal.css';
import axios from "axios";
import config from "../../config";
import { useState } from "react";
import activityList from "../../data/activity-type";


const ModalGoal = ({showGoalForm, handleCloseModal}) => {
    const [activityType, setActivityType] = useState("");
    const [deadline, setDeadline] = useState();
    const [duration, setDuration] = useState(0);
    const [energyBurn, setEnergyBurn] = useState(0);
    const [distance, setDistance] = useState(0);

    const xAccessToken = localStorage.getItem('xAccessToken')
    const createGoal = async () => {
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
            headers: {  
              'Content-Type': 'application/json', 
              'x-access-token': xAccessToken
            },
            data,
        };
        try {
            await axios(configAxios)
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
    
      const handleSave = async (e) => {
        e.preventDefault();
        if (activityType === "" || duration === ""){
          alert("Please check form")
        }else {
          await createGoal();
          setActivityType("");
          setDeadline("");
          setDuration("");
          setEnergyBurn("");
          setDistance("");
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
                <select name="activities" className="activities" onChange={handleSelect} value={activityType}>
                  <option value="">Please Select</option>
                  {
                    activityList.map(ac => {
                        return <option key={ac} value={ac}>{ac}</option>
                    })
                  }
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
                  <input type="text" disabled={true} value={energyBurn}/>
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
                  Cancel
                </Button>
              </Modal.Footer>
            </form>
        </Modal.Body>
      </Modal>
    )
}

export default ModalGoal;