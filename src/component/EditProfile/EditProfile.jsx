import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import './EditProfile.css';

const EditProfile = ({showEditModal,handleCloseModal}) => {
    return (

        <Modal show={showEditModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Edit profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="edit-proflie-user">
                    My Profile
                </div>
                <form className="form-edit">
                    <div className="image-edit-user">
                        <img src="https://img.freepik.com/premium-vector/man-is-showing-gesture-okay-ok-cartoon-style_165429-877.jpg?w=2000" alt="user" />
                        <div className="btn-edit-photo">
                            <button>
                                <img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png" />
                            </button>
                        </div>
                    </div>
                    <div className="edit-identity">
                        <div>Name : </div>
                        <input type="text" />
                        <div>Gender : </div>
                        <select name="activities" id="activities">
                            <option value="">Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <div>Height : </div>
                        <input type="text" />
                        <div>Weight : </div>
                        <input type="text" />
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