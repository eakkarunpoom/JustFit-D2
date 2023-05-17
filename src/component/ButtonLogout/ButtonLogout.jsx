import Dropdown from 'react-bootstrap/Dropdown';

const ButtonLogout = ({handleLogout}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            name
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ButtonLogout;