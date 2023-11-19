import React, { useState } from 'react';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { Button } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    lightteal: createColor('#14b8a6'),
  },
});
 
const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    street_number: '',
    street_name: '',
    city: '',
    state: '',
    zip: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Call the createAccount function with form data
    await createAccount(
      formData.first_name,
      formData.last_name,
      formData.street_number,
      formData.street_name,
      formData.city,
      formData.state,
      formData.zip
    );
  };
 
  const createAccount = async (first_name, last_name, street_number, street_name, city, state, zip) => {
    const api_key = 'YOUR_API_KEY'; // Replace with your actual API key
 
    const body = {
      first_name: first_name,
      last_name: last_name,
      address: {
        street_number: street_number,
        street_name: street_name,
        city: city,
        state: state,
        zip: zip
      }
    };
 
    try {
      // Make a POST request to create a customer
      const customerResponse = await fetch(`http://api.reimaginebanking.com/customers?key=${api_key}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
 
      const customerData = await customerResponse.json();
      console.log('Customer Status:', customerResponse.status);
      console.log('Customer Response Body:', customerData);
 
      const id = customerData.object_created._id;
 
      const account_body = {
        type: 'Checking',
        nickname: first_name,
        rewards: 0,
        balance: 0,
        account_number: '0123012301230123'
      };
 
      // Make a POST request to create an account for the customer
      const accountResponse = await fetch(`http://api.reimaginebanking.com/customers/${id}/accounts?key=bb8633c98be2308d1dba1ef01947f500`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account_body),
      });
 
      const accountData = await accountResponse.json();
      console.log('Account Status:', accountResponse.status);
      console.log('Account Response Body:', accountData);
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };
 
  return (
    <main className="flex min-h-screen flex-col items-center py-6 px-10">
      <h1 className="text-4xl p-4"><b>Create Account</b></h1>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Street Number
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" name="street_number" value={formData.street_number} onChange={handleChange} placeholder="Street Number"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Street Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" name="street_name" value={formData.street_name} onChange={handleChange} placeholder="Street Name"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            State
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Zip
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip"/>
        </div>
        <div className="flex m-6 align-center justify-center">
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="lightteal" sx={{color: 'white'}} onClick={handleSubmit}>
            <a href="/login">
              Create Account
            </a>
          </Button>
        </ThemeProvider>
        </div>
      </form>
      </main>
  );
};
 
export default CreateAccountPage;