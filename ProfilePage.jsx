import React from "react";
import Layout from "../../component/Layout";
import { ProfileImg } from "../../assets";

const ProfilePage = () => {
    return (
        <Layout>
            <mian>
                <section>
                    <article>
                        <h1>My Profile</h1>
                        <p>Current Photo</p>
                        <img src={ProfileImg} alt="Profile Photo" />
                    </article>
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
                    <button>
                        <a href="/">Edit Profile</a>
                    </button>
                </section>
            </mian>
        </Layout>
    )
};

export default ProfilePage;