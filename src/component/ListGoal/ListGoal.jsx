import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import DeleteGoal from "../DeleteGoal/DeleteGoal";

const ListGoal = ({showGoalForm,getGoal,goal}) => {
    const [onDeleteGoal, setOnDeleteGoal] = useState(false)
    const [selectedGoal, setSelectedGoal] = useState({});

    const xAccessToken = localStorage.getItem('xAccessToken')
    const calDate = (item) => {
        const newDate = new Date(item.deadline);
        const currentDate = new Date();
        const time = Math.abs(newDate - currentDate);
        const calTime = Math.round((time/1000)/60/60/24);
        return calTime;            
        
    }

    const updateStatus = (goalItem) => {
        console.log(goalItem)
        const data = {
            status:goalItem.status
        }
        const configAxios = {
            method: 'put',
            url: `${config.serverUrl}/api/goal/${goalItem._id}`,
            headers: {
                'x-access-token': xAccessToken
            },
            data
        };
        try {
            axios(configAxios)
            .then((response) => {
                console.log(response.data);        
                getGoal();
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleDone = (item) => {
        item.status = "done";
        updateStatus(item)
    }
 
    const handleCancel = (item) => {
        item.status = "fail";
        updateStatus(item)
    }
 
    const handleDeleteGoal = (item) => {
        setSelectedGoal(item)
        setOnDeleteGoal(true)
    }
 
    const handleCancleDeleteGoal = (item) => {
        getGoal();
        setSelectedGoal(item)
        setOnDeleteGoal(false)
    }
    
    useEffect(() => {
        getGoal();
   }, [showGoalForm]);

    return (
        <>
            {
                goal.map((item) => {
                return (
                    <div className="goal-content" key={item._id}>
                        <div className="image-goal">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5w6Knvs6OaZ9wkKlCggZXHLXIO9XRkQ4YKiPBF7dMqo6tv-l" alt="running"/>
                            <div className="deadline">
                                End in: {calDate(item)} day
                            </div>
                        </div>
                        <div className="mid-content">
                            <div className="goal-type">
                                {item.activityType}
                            </div>
                            <div className="goal-energy">
                                Energy burn : {item.energyBurn} cal
                            </div>
                            <div className="goal-duration">
                                Duration : {item.duration} min
                            </div>
                        </div>
                        {
                            item.status === 'none' ? 
                            <div className="btn-goal">
                                <button className="done" onClick={()=> handleDone(item)}>Done</button>
                                <button className="cancle" onClick={()=> handleCancel(item)}>Cancel</button>
                                <button className="delete-goal" onClick={()=> handleDeleteGoal(item)}>X</button>
                            </div> : null
                        }
                        {
                            item.status === 'done' ?
                            <div className="btn-goal">
                                <button className="done">Done</button>
                                <button className="delete-goal" onClick={()=> handleDeleteGoal(item)}>X</button>
                            </div> : null

                        }
                        {
                            item.status === 'fail' ? 
                            <div className="btn-goal">
                                <button className="cancle" style={{margin:"0px 12px"}}>Cancel</button>
                                <button className="delete-goal" onClick={()=> handleDeleteGoal(item)}>X</button>
                            </div> : null
                        }
                    </div>
                    )
                })
            }
            {
                onDeleteGoal && <DeleteGoal onDeleteGoal={onDeleteGoal} selectedGoal={selectedGoal} handleCancleDeleteGoal={handleCancleDeleteGoal}/>
            }
        </>
    )
}

export default ListGoal;