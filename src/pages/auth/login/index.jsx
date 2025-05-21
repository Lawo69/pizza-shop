import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../../components/button/Button";
import FormInput from '../../../components/inputField/FormInput';
import { IoIosCloseCircle } from "react-icons/io";
import usersData from '../../../constants/usersData.json';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = usersData.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      toast.success(`Welcome, ${user.name}`);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("user",user);

      if (user.role === "owner") {
        navigate("/dashboard");
      } else if (user.role === "customer") {
        navigate("/");
      }
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="relative p-4 max-w-md mx-auto">
      <p className='absolute top-0 right-0 cursor-pointer' onClick={() => navigate('/')}>
        <IoIosCloseCircle size={24} />
      </p>

      <h2 className="text-xl font-semibold mb-4 flex justify-center">Login Page</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <Button type="submit" variant='primary' className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
