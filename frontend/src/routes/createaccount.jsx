import React, { useState } from 'react';

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
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields here */}
        <label>
          First Name:
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        </label>
        {/* Add other form fields similarly */}

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
