import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const ListGoal = () => {
    const [goal, setGoal] = useState([]);

    const calDate = (data) => {
        for (let i = 0; i < data.length; i++) {
            const newDate = new Date(data[i].deadline);
            const currentDate = new Date();
            const time = Math.abs(newDate - currentDate);
            const calTime = Math.round((time/1000)/60/60/24);
            // console.log(calTime);
            data[i].deadline = calTime;            
        }
    }

    const getGoal = () => {
        const configAxios = {
            method: 'get',
            url: `${config.serverUrl}/api/goal`,
            headers: { }
        };
        try {
            axios(configAxios)
            .then((response) => {
                calDate(response.data.data)
                setGoal(response.data.data)
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getGoal();
   }, [goal]);

   const handleDone = () => {

   }

   const handleCancle = () => {
    
   }


    return (
        goal.map((item) => {
            return (
                <div className="goal-content" key={item._id}>
                    <div className="image-goal">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5w6Knvs6OaZ9wkKlCggZXHLXIO9XRkQ4YKiPBF7dMqo6tv-l" alt="running"/>
                        <div className="deadline">
                            End in: {item.deadline}
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
                            <button className="done" onClick={handleDone}>Done</button>
                            <button className="cancle" onClick={handleCancle}>Cancel</button>
                        </div> : null
                    }
                    {
                        item.status === 'done' ? 
                        <button className="done">Done</button> : null

                    }
                    {
                        item.status === 'fail' ? 
                        <button className="cancle">Cancel</button> : null
                    }
                </div>
            )
            
        })
    )
}

export default ListGoal;