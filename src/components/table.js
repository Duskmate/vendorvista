import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./table.css"
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from "react";
import AlertDialog from "./deleteButton";
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function VendorTable({ vendorData, setVendorData }) {
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState(10);
    const [deleted, setDeleted] = useState(false);
    const [apiError, setApiError] = useState(false);

    let start = (page-1)*rows;
    let paginatedVendorData = vendorData.slice(start, (start+rows));

    const navigate = useNavigate();
    const handleEdit = (vendor) => {
        navigate('/editvendor', {state: {vendor}})
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setDeleted(false);
    }

    return (
        <div>
            <TableContainer className="container">
                <Box className="addButton">
                    <Button variant="contained" disableElevation sx={{borderRadius: '20px', marginBottom: '20px'}}>
                        <Link to='/addvendor' className="link">Add Vendor</Link>
                    </Button>
                </Box>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 600}}>Vendor Name</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Bank Account No</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Bank Name</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {paginatedVendorData? paginatedVendorData.map((vendor) => (
                        <TableBody key={vendor._id}>
                            <TableRow>
                                <TableCell>{vendor.name}</TableCell>
                                <TableCell>{vendor.BankAccount}</TableCell>
                                <TableCell>{vendor.BankName}</TableCell>
                                <TableCell className="actionArea">
                                    <Box className="actionButtons">
                                        <IconButton aria-label="edit" onClick={() => handleEdit(vendor)}><EditIcon /></IconButton>
                                        <AlertDialog vendor={vendor} setDeleted={setDeleted} setVendorData={setVendorData} setApiError={setApiError}/>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        )): null
                    }
                </Table>
                <div className="pagination">
                    <div></div>
                    <Pagination count={Math.ceil(vendorData.length/rows)} showFirstButton showLastButton
                        onChange={(event, page) => {
                            setPage(page);
                        }}
                    />
                    <FormControl variant="standard" sx={{ width: 100}} className="row">
                        <InputLabel>Row per page</InputLabel>
                        <Select value={rows}
                            onChange={(e) => {
                                setRows(e.target.value);
                            }}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </TableContainer>
            <Snackbar
                open={deleted}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Vendor Deleted Successfully
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center"}} open={apiError}>
                <Alert severity="error">Could not complete the request. Check that the backend is running and reachable.</Alert>
            </Snackbar>
        </div>
    )
}