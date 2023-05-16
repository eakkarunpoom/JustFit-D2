import Layout from "../../component/Layout/Layout";
import './ProfilePage.css';
import { useState } from "react";
import EditProfile from "../../component/EditProfile/EditProfile";

const ProfilePage = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    
    const handleEditModal = () => {
        setShowEditModal(true);
    }

    const handleCloseModal = () => {
        setShowEditModal(false);
    }
    
    return (
        <Layout>
            <div className="container" style={{margin:"48px auto"}}>
                <div style={{padding:"64px", margin:"0 48px"}}>
                    <div className="myproflie-user">
                        My Profile
                    </div>
                    <div className="current-photo">
                        Current Photo
                    </div>
                    <div className="image-user-profile">
                        <img src="https://img.freepik.com/premium-vector/man-is-showing-gesture-okay-ok-cartoon-style_165429-877.jpg?w=2000" alt="user" />
                    </div>
                    <div className="name-profile-user">
                        <div className="identity">Name : </div> Moss Eakkarunpoom
                    </div>
                    <div className="gender">
                        <div className="identity">Gender : </div> Male
                    </div>
                    <div className="age">
                        <div className="identity">Age : </div> 24 years
                    </div>
                    <div className="height-profile-user">
                        <div className="identity">Height : </div> 170 cm.
                    </div>
                    <div className="weight-profile-user">
                        <div className="identity">Weight : </div> 47 kg.
                    </div>
                    <div className="btn-edit-profile">
                        <button className="edit-profile" onClick={handleEditModal}>Edit Profile</button>
                    </div>
                </div> 
            </div>
            <EditProfile showEditModal={showEditModal} handleCloseModal={handleCloseModal}/>
        </Layout>
    )
}

export default ProfilePage;