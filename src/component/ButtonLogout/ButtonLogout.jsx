import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineUser } from "react-icons/ai";

const ButtonLogout = ({handleLogout}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
                <AiOutlineUser style={{fontSize:"24px", color:"white"}}/>
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ButtonLogout;