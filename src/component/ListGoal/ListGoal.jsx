import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import DeleteGoal from "../DeleteGoal/DeleteGoal";
import {RxCrossCircled} from "react-icons/rx";
import jogging from "../../images/jogging.png"
import yoga from "../../images/yoga.png"
import abs from "../../images/waist.png"
import pilates from "../../images/pilates.png"
import lotus from "../../images/lotus.png"



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
                        {
                                item.activityType === "Jogging" ? <img src={jogging} alt="running"/> : null
                            }
                            {
                                item.activityType === "Yoga" ? <img src={yoga} alt="yoga" /> : null
                            }
                            {
                                item.activityType === "Abs" ? <img src={abs} alt="abs" /> : null
                            }
                            {
                                item.activityType === "Pilates" ? <img src={pilates} alt="pilates" /> : null
                            }
                            {
                                item.activityType === "Zumba" ? <img src={lotus} alt="lotus" /> : null
                            }
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
                                <div className="btn-edit-del">
                                    <button className="del" style={{color:"white"}} onClick={() => handleDeleteGoal(item)}> <RxCrossCircled style={{fontSize:"24px"}}/> </button>
                                </div>
                            </div> : null
                        }
                        {
                            item.status === 'done' ?
                            <div className="btn-goal">
                                <div style={{display:"flex", alignItems:"center"}}>
                                    <p className="finish" style={{borderRadius:"5px",backgroundColor:"green"}}>Finish</p>
                                </div>
                                <div className="btn-edit-del">
                                    <button className="del" style={{color:"white"}} onClick={() => handleDeleteGoal(item)}> <RxCrossCircled style={{fontSize:"24px"}}/> </button>
                                </div>
                            </div> : null

                        }
                        {
                            item.status === 'fail' ? 
                            <div className="btn-goal">
                                <div style={{display:"flex", alignItems:"center"}}>
                                    <p className="failed" style={{borderRadius:"5px",backgroundColor:"red"}}>Failed</p>
                                </div>
                                <div className="btn-edit-del">
                                    <button className="del" style={{color:"white"}} onClick={() => handleDeleteGoal(item)}> <RxCrossCircled style={{fontSize:"24px"}}/> </button>
                                </div>
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