import React, {useState, useEffect} from "react";
import axios from "axios";
import { config } from "../App";
import VendorTable from "./table"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";

export default function VendorData() {
    const [loading, setLoading] = useState(false);
    const [vendorData, setVendorData] = useState([]);
    const [apiError, setApiError] = useState(false);

    const performAPICall = async() => {
        setLoading(true);
        try {
            const response = await axios.get(`${config.endpoint}/vendors`);
            setVendorData(response.data);
            setLoading(false);
        } catch(e) {
            setLoading(false);
            // console.log(e)
            setApiError(true);
        }
    }

    // Performs the API call to get the users list and store it to display the users on page refresh
    useEffect(() => {
        performAPICall();
    }, []);
    
    return (
        <div>
            {loading?
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: ' center', height: '85vh'}}>
                    <CircularProgress />
                </Box>:
                <VendorTable
                    vendorData={vendorData}
                    setVendorData={setVendorData}
                />
            }
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center"}} open={apiError}>
                <Alert severity="error">Could not fetch vendor details. Check that the backend is running, reachable and returns valid JSON.</Alert>
            </Snackbar>
        </div>
    )
}