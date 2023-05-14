import React from "react";
import Layout from "../../component/Layout";
import { ProfileImg } from "../../assets";
import "./ProfilePage.css";

const ProfilePage = () => {
    return (
        <Layout>
            <main>
                <section className="profile">
                    <article className="head">
                        <div className="title">
                             <h1>My Profile</h1>
                        </div>
                        <div className="current-photo">
                            <p>Current Photo</p>
                        </div>
                        <div className="profileimg">
                            <img src={ProfileImg} alt="Profile Photo" />
                        </div>
                    </article>
                    <div className="detail">
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>Jessica Jusfit</td>
                            </tr>
                            <tr>
                                <td>Gender:</td> 
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>DOB:</td>
                                <td>12/25/2000</td>
                            </tr>
                            <tr>
                                <td>Height:</td>
                                <td>167</td>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td>47</td>
                            </tr>
                        </table>
                    </div>
                    <div className="btn-profile">
                        <button className="edit-profile">
                            <a href="/">Edit Profile</a>
                        </button>
                    </div>
                </section>
            </main>
        </Layout>
    )
};

export default ProfilePage;