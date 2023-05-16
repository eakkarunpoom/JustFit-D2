import Nav from 'react-bootstrap/Nav';

const ButtonLogout = ({handleLogout}) => {
    return (
        <Nav.Link><button className='login' onClick={handleLogout}>Log out</button></Nav.Link>
    )
}

export default ButtonLogout;