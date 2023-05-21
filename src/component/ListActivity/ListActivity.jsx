import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import UpdateActivity from "../UpdateActivity/UpdateActivity";
import DeleteActivity from "../DeleteActivity/DeleteActivity";

const ListActivity = ({showActivityForm}) => {
    const [activity, setActivity] = useState([]);
    const [showUpdateActivity, setshowUpdateActivity] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [modalDelete, setModalDelete] = useState(false);
    const xAccessToken = localStorage.getItem('xAccessToken')
    const getActivity = () => {
        const configAxios = {
            method: 'get',
            url: `${config.serverUrl}/api/activity`,
            headers: {
                'x-access-token': xAccessToken
            }
        };
        try {
            axios(configAxios)
            .then((response) => {
                setActivity(response.data.data)
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = (item) => {
        setSelectedItem(item)
        setshowUpdateActivity(true);
    }
    const showModalDelete = (item) => {
        setSelectedItem(item)
        setModalDelete(true);
    }

    const handleCloseModalDelete = () => {
        getActivity();
        setModalDelete(false);
    }

    const handleClose = () => {
        getActivity();
        setshowUpdateActivity(false);
    }

    useEffect(() => {
        getActivity();
    }, [showActivityForm]);

   return (
    <>
        {
            activity.map((item) => {
            return(
                <div className="activity-content" key={item._id}>
                    <div className="list-activity">
                        <div className="image-activity">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5w6Knvs6OaZ9wkKlCggZXHLXIO9XRkQ4YKiPBF7dMqo6tv-l" alt="running"/>
                        </div>
                        <div className="detail-activity-content">
                            <div className="habit-title">
                                {item.title}
                            </div>
                            <div className="duration-activity">
                                Duration : {item.duration} min
                            </div>
                            <div className="distance-activity">
                                Distance : {item.distance} m
                            </div>
                            <div className="energy-burn-activity">
                                Energy burn : {item.energyBurn} cal
                            </div>
                            <div className="descriptioin-activity">
                                {item.description}
                            </div>
                        </div>
                        <div className="btn-edit-del">
                            <button className="edit" onClick={() => handleUpdate(item)}><img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="edit"/></button>
                            <button className="del" onClick={() => showModalDelete(item)}><img src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="del" /></button>
                        </div>
                    </div>
                    
                </div>
            )    
        })
        }
        {/* Modal */}
        {
            showUpdateActivity && <UpdateActivity editActivity={selectedItem} showUpdateActivity={showUpdateActivity} handleClose={handleClose} />
        }
        {
            modalDelete && <DeleteActivity modalDelete={modalDelete} handleCloseModalDelete={handleCloseModalDelete} editActivity={selectedItem}/>
        }
        
    </>
  )
}

export default ListActivity;