import { useState } from "react";
import { DateTime } from "luxon";
import config from "../../config";
import { Modal,Button } from "react-bootstrap";
import axios from "axios";
import activityList from "../../data/activity-type";

const UpdateActivity = ({showUpdateActivity, handleClose, editActivity}) => {
    console.log(editActivity)
    const [activityType, setActivityType] = useState(editActivity.activityType)
    const [title, setTitle] = useState(editActivity.title);
    
    const dateTime = DateTime.fromISO(editActivity.dateTime);
    const [date, setDate] = useState(dateTime.toFormat('yyyy-MM-dd')); // 2023-05-12
    const [duration, setDuration] = useState(editActivity.duration);
    const [energyBurn, setEnergyBurn] = useState(editActivity.energyBurn);
    const [distance, setDistance] = useState(editActivity.distance);
    const [description, setDescriptions] = useState(editActivity.description);
    const xAccessToken = localStorage.getItem('xAccessToken')

    const updateActivity = async () => {
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
            method: 'put',
            url: `${config.serverUrl}/api/activity/${editActivity._id}`,
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
    
      const handleSave = async (e) => {
        e.preventDefault();
        await updateActivity();
        handleClose();
      }
    return (
        <Modal show={showUpdateActivity} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Activity</Modal.Title>
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
                <div className="title-activities">
                    <h5>Habit Title</h5>
                </div>
                <div className="text-input">
                    <input type="text" value={title} onChange={handleTitle} placeholder="Enter habit name"/>
                </div>
                <div className="date-duration">
                    <div className="date">
                    <h5>Date</h5>
                    <input type="date" onChange={handleDate} value={date} />
                    </div>
                    <div className="duration22">
                    <h5>Duration (min)</h5>
                    <input type="text" value={duration} onChange={handleDuration} placeholder="Enter duration (minutes)"/>
                    </div>
                </div>
                <div className="energy-dis">
                    <div className="energy-burn">
                    <h5>Energy burn</h5>
                    <input type="text" disabled={true} value={energyBurn}/>
                    </div>
                    <div className="distance">
                    <h5>Distance (meter)</h5>
                    <input type="text" onChange={handleDistance} value={distance} placeholder="Enter distance (meters)"/>
                    </div>
                </div>
                <div className="description">
                    <h5>Description</h5>
                    <input type="text" onChange={handleDescription} value={description} placeholder="Enter description"/>
                </div>
                <Modal.Footer>
                    <Button type="submit" style={{backgroundColor:"#712EFF", border:"none"}}>
                    Create
                    </Button>
                    <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"#FF4878", border:"none"}}>
                    Cancel
                    </Button>
                </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default UpdateActivity;