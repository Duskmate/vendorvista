import React, { useState } from "react";
import Header from './header'
import { useLocation } from 'react-router-dom'
import "./editVendor.css"
import Form from "./form";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useNavigate } from "react-router-dom";
import { getAccount } from "./account";

export default function EditVendor() {
    const location = useLocation();
    const navigate = useNavigate();
    const vendor = location.state || null;
    const [user, setUser] = useState(getAccount());

    function handleClick(event) {
        event.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <Header setUser={setUser} user={user}/>
            <div className="container">
                <div role="presentation" className="form">
                    <Breadcrumbs aria-label="breadcrumb">
                        <div onClick={handleClick} className="pointer">Vendors</div>
                        <Typography color="text.primary">Edit Vendor</Typography>
                    </Breadcrumbs>
                </div>
                {vendor?
                    <div>
                        <Form data={vendor.vendor} />
                    </div>:
                    <div className="center">
                        Vendor not found
                    </div>
                }
            </div>
        </div>
    )
}