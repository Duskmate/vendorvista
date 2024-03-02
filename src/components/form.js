import * as React from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
import { config } from '../App';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";

export default function Form(data) {
    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(false)
    const navigate = useNavigate();
    const [vendor, setVendor] = useState({
        name: "" || data.data.name,
        BankAccount: "" || data.data.BankAccount,
        BankName: "" || data.data.BankName,
        AddressLine1: "" || data.data.AddressLine1,
        AddressLine2: "" || data.data.AddressLine2,
        City: "" || data.data.City,
        Country: "" || data.data.Country,
        ZipCode: "" || data.data.ZipCode
    })

    const handleChange = (value, key) => {
        let tempVendor = vendor;
        tempVendor[key] = value;
        setVendor(tempVendor);
        if(vendor['name'] && vendor['BankAccount'] && vendor['BankName'] && vendor['AddressLine1'] && vendor['City'] && vendor['Country'] && vendor['ZipCode']) {
            setDisabled(false)
        }
    }

    const handleSubmit = async() => {
        try {
            setLoading(true);
            if (!data.data.name) {
            } else {
              await axios.patch(`${config.endpoint}/vendors`, {id: data.data._id, vendor: vendor})
            }
            setLoading(false);
            navigate('/');
        } catch(e) {
            setLoading(false);
            // console.log(e);
            setApiError(true);
        }
    }

  return (
    <div className='form'>
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center"}} open={apiError}>
        <Alert severity="error">Could not complete the request. Check that the backend is running and reachable.</Alert>
      </Snackbar>
      <FormControl defaultValue={"" || data.data.name} required>
        {!data.data.name? <h2>Add new vendor</h2>: <h2>Edit Vendor</h2>}
        <Label>Name</Label>
        <StyledInput placeholder="Vendor Name" id='vendorname' onChange={(e) => handleChange(e.target.value, 'name')}/>
        <HelperText />
      </FormControl>
      <FormControl defaultValue={"" || data.data.BankAccount} required>
        <Label>Bank account</Label>
        <StyledInput placeholder="Bank Account Number" type='number' id='bankaccount' onChange={(e) => handleChange(e.target.value, 'BankAccount')}/>
        <HelperText />
      </FormControl>
      <FormControl defaultValue={"" || data.data.BankName} required>
        <Label>Bank name</Label>
        <StyledInput placeholder="Bank Name" id='bankname' onChange={(e) => handleChange(e.target.value, 'BankName')}/>
        <HelperText />
      </FormControl>
      <FormControl defaultValue={"" || data.data.AddressLine1} required>
        <Label>Address</Label>
        <StyledInput placeholder="Address Line 1" id='address1' onChange={(e) => handleChange(e.target.value, 'AddressLine1')}/>
        <HelperText />
      </FormControl>
      <FormControl defaultValue={"" || data.data.AddressLine2} className='add'>
        <StyledInput placeholder="Address Line 2" id='address2'onChange={(e) => handleChange(e.target.value, 'AddressLine2')}/>
      </FormControl>
      <FormControl defaultValue={"" || data.data.City} required>
        <Label>City</Label>
        <StyledInput placeholder="City" id='city' onChange={(e) => handleChange(e.target.value, 'City')}/>
        <HelperText />
      </FormControl>
      <FormControl defaultValue={"" || data.data.Country} required>
      <Label>Country</Label>
        <StyledInput placeholder="Country" id='vendorcountry' onChange={(e) => handleChange(e.target.value, 'Country')}/>
        <HelperText />
      </FormControl>
      <FormControl defaultValue={"" || data.data.ZipCode} required>
        <Label>Zip</Label>
        <StyledInput placeholder="Zip Code" type='number' id='zipcode' onChange={(e) => handleChange(e.target.value, 'ZipCode')}/>
        <HelperText />
      </FormControl>
      <Box sx={{margin: '1rem 0rem'}}>
        {loading?
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
          >
          Save
        </LoadingButton>:
        <Button variant="contained" className="submitButton" disabled={disabled} onClick={() => handleSubmit()} >Save</Button>
        }
      </Box>
    </div>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 60%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};