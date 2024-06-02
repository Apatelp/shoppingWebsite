import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Account = ({ user, onUpdateUser }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateUser(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" value={formData.address} onChange={handleChange} />
      </FormGroup>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default Account;
