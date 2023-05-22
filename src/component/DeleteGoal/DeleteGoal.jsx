import { Modal, Button } from "react-bootstrap";
import config from "../../config";
import axios from "axios";

const DeleteGoal = ({onDeleteGoal, selectedGoal, handleCancleDeleteGoal}) => {
    const xAccessToken = localStorage.getItem('xAccessToken')
    const deleteListGoal = async () => {
        const configAxios = {
            method: 'delete',
            url: `${config.serverUrl}/api/goal/${selectedGoal._id}`,
            headers: {  
            'Content-Type': 'application/json', 
            'x-access-token': xAccessToken
            }
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

    const handleDeleteGoal = async (e) => {
        e.preventDefault();
        await deleteListGoal();
        handleCancleDeleteGoal();
    }
    return (
        <Modal show={onDeleteGoal} onHide={handleCancleDeleteGoal}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm Goal Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="des-modal-delete">
                    Are you sure you want to delete this Goal card? This action cannot be undone.
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" style={{backgroundColor:"#712EFF", border:"none"}} onClick={handleDeleteGoal}>
                Delete
                </Button>
                <Button variant="secondary" style={{backgroundColor:"#FF4878", border:"none"}} onClick={handleCancleDeleteGoal}>
                Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteGoal;