import React, { useState } from "react";
import Header from './header'
import "./addVendor.css"
import Form from "./form";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { getAccount } from "./account";

export default function AddVendor() {
    const navigate = useNavigate();
    const [user, setUser] = useState(getAccount())

    function handleClick(event) {
        event.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <Header setUser={setUser} user={user}/>
            <div className="container">
                <div role="presentation" onClick={handleClick} className="form">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href='/'>Vendors</Link>
                        <Typography color="text.primary">Add Vendor</Typography>
                    </Breadcrumbs>
                </div>
                {user? <Form data={{}} />:
                    <div className="center">Kindly login to make changes</div>
                }
            </div>
        </div>
    )
}