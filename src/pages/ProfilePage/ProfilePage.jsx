import Layout from "../../component/Layout/Layout";
import './ProfilePage.css';
import { useEffect, useState } from "react";
import EditProfile from "../../component/EditProfile/EditProfile";
import config from "../../config";
import axios from "axios";

const ProfilePage = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const xAccessToken = localStorage.getItem('xAccessToken')
    const [name, setName ] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [photoUrl] = useState(localStorage.getItem('photoURL'))

    const getUser = () => {
        const configAxios = {
            method: 'get',
            url: `${config.serverUrl}/api/user`,
            headers: {
                'x-access-token': xAccessToken
            }
        };
        try {
            axios(configAxios)
            .then((response) => {
                console.log(response.data.data)
                if(response.data.data.length === 0 ){
                    setName('Default name')
                    setGender('Default')
                    setAge(0)
                    setHeight(0)
                    setWeight(0)
                } else {
                    setName(response.data.data[0]['name'])
                    setGender(response.data.data[0]['gender'])
                    setAge(response.data.data[0]['age'])
                    setHeight(response.data.data[0]['height'])
                    setWeight(response.data.data[0]['weight'])
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleEditModal = () => {
        setShowEditModal(true);
    }

    const handleCloseModal = () => {
        setShowEditModal(false);
        getUser();
    }

    useEffect(()=>{
        getUser()
    },[])
    
    return (
        <Layout>
            <div className="edit-profile" style={{margin:"48px auto"}}>
                <div style={{padding:"64px", margin:"0 48px"}}>
                    <div className="myproflie-user">
                        My Profile
                    </div>
                    <div className="current-photo">
                        Current Photo
                    </div>
                    <div className="image-user-profile">
                    {
                        photoUrl && <img src={photoUrl} />
                    }                    
                    </div>
                    <div className="name-profile-user">
                        <div className="identity">Name : </div> {name}
                    </div>
                    <div className="gender">
                        <div className="identity">Gender : </div> {gender}
                    </div>
                    <div className="age">
                        <div className="identity">Age : </div> {age} years
                    </div>
                    <div className="height-profile-user">
                        <div className="identity">Height : </div> {height} cm.
                    </div>
                    <div className="weight-profile-user">
                        <div className="identity">Weight : </div> {weight} kg.
                    </div>
                    <div className="btn-edit-profile">
                        <button className="edit-profile" onClick={handleEditModal}>Edit Profile</button>
                    </div>
                </div> 
            </div>
            <EditProfile photoUrl={photoUrl} showEditModal={showEditModal} handleCloseModal={handleCloseModal} name={name} gender={gender} age={age} height={height} weight={weight}/>
        </Layout>
    )
}

export default ProfilePage;