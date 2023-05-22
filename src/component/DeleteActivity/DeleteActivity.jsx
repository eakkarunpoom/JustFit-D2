import { Modal, Button } from "react-bootstrap";
import config from "../../config";
import axios from "axios";

const DeleteActivity = ({modalDelete , handleCloseModalDelete , editActivity}) => {
    const xAccessToken = localStorage.getItem('xAccessToken')
    const deleteListActivity = async () => {
        const configAxios = {
            method: 'delete',
            url: `${config.serverUrl}/api/activity/${editActivity._id}`,
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

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteListActivity();
        handleCloseModalDelete();
    }

    return (
        <Modal show={modalDelete} onHide={handleCloseModalDelete}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm Activity Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="des-modal-delete">
                    Are you sure you want to delete this activity card? This action cannot be undone.
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" style={{backgroundColor:"#712EFF", border:"none"}} onClick={handleDelete}>
                Delete
                </Button>
                <Button variant="secondary" onClick={handleCloseModalDelete} style={{backgroundColor:"#FF4878", border:"none"}}>
                Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteActivity;