import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import './EditProfile.css';
import config from "../../config";
import axios from "axios";
import genderList from "../../data/genderList";

const EditProfile = ({showEditModal, handleCloseModal,name,gender,age,weight,height,photoUrl}) => {
    const [nameUser, setNameUser] = useState(name);
    const [genderUser, setGenderUser] = useState(gender);
    const [ageUser, setAgeUser] = useState(age);
    const [heightUser, setHeightUser] = useState(height);
    const [weightUser, setWeightUser] = useState(weight); 
    const xAccessToken = localStorage.getItem('xAccessToken')
    const createUser = async () => {
      const data = {
          name: nameUser,
          gender: genderUser,
          age: ageUser,
          height: heightUser,
          weight: weightUser,
      }
  
      const configAxios = {
          method: 'post',
          url: `${config.serverUrl}/api/user`,
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

    const editNameUser = (e) => {
        setNameUser(e.target.value);
    }

    const editGenderUser = (e) => {
        setGenderUser(e.target.value)
    }

    const editAgeUser = (e) => {
        setAgeUser(e.target.value)
    }

    const editHeightUser = (e) => {
        setHeightUser(e.target.value)
    }

    const editWeightUser = (e) => {
        setWeightUser(e.target.value)
    }

    const handlesave = async (e) => {
        e.preventDefault();
        await createUser();
        handleCloseModal();
    }

    return (
        <Modal show={showEditModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Edit profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="edit-proflie-user">
                    My Profile
                </div>
                <form onSubmit={handlesave} className="form-edit">
                    <div className="image-edit-user">
                    {
                        photoUrl && <img src={photoUrl} />
                    }   
                        <div className="btn-edit-photo">
                        </div>
                    </div>
                    <div className="edit-identity">
                        <div>Name : </div>
                        <input type="text" onChange={editNameUser} value={nameUser}/>
                        <div>Gender : </div>
                        <select name="activities" className="activities" onChange={editGenderUser} value={genderUser}>
                            <option value="">Please Select</option>
                            {
                                genderList.map(gd => {
                                    return <option key={gd} value={gd}>{gd}</option>
                                })
                            }
                        </select>
                        <div>Age : </div>
                        <input type="text" onChange={editAgeUser} value={ageUser}/>
                        <div>Height : </div>
                        <input type="text" onChange={editHeightUser} value={heightUser}/>
                        <div>Weight : </div>
                        <input type="text" onChange={editWeightUser} value={weightUser}/>
                    </div>
                <Modal.Footer>
                    <Button type="submit" style={{backgroundColor:"#712EFF", border:"none"}}>
                    Edit 
                    </Button>
                </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default EditProfile