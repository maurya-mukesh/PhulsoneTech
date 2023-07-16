import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRegisterUser } from "../../actions/authAction";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [userRes, setUserRes] = useState({});
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = formData;

  const dispatch = useDispatch();

  // const success = useSelector((state) => state.auth.success);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    fetchRegisterUser(formData);
    // .then((res) => {
    //   setLoading(false);
    //   console.log("Response=>36", res);
    //   setUserRes(res);
    // })
    // .catch((error) => {
    //   setLoading(false);
    //   console.log("error response=>41", error);
    //   setUserRes(error);
    // });
    // console.log("userRes=>45", userRes);
  };
  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {loading && <div>Loading...</div>}
        {success && <div className="success-message">{success}</div>}
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Contact"
        />
        <button type="submit">Register</button>
        <br />
        Already have an account?&nbsp;
        <Link to="/Login">Login</Link>
      </form>
    </div>
  );
};

export default connect(null, { fetchRegisterUser })(Register);
