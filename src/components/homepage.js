import React, { useState } from "react";
import Header from "./header";
import "./homepage.css"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"
import { setAccount, getAccount } from "./account";
import VendorData from "./vendorData";

export default function Hompage() {
    const [user, setUser] = useState(getAccount())

    function handleCallBackResponse(response) {
        const userObject = jwtDecode(response.credential);
        setUser(userObject)
        setAccount(userObject);
    }

    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <Header setUser={setUser} />
            {user?
                <VendorData />:
                <div className="hero">
                    <div className="hero-image"></div>
                    <div className="hero-section">
                        <div className="signin">
                            <h3>Welcome to Vendor Vista</h3>
                            <div className="subHeading">One stop solution to manage vendors</div>
                            <div className="googleButton">
                                <div className="text">Sign in</div>
                                <GoogleLogin onSuccess={handleCallBackResponse} onError={errorMessage} size="medium" />
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}