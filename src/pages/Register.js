import React from "react";
import { Form, message, Radio } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertSlice";
import { RegisterUser } from "../apis/authentication";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const userInfo = { ...values, status: 'approved' };
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(userInfo);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div className="h-screen d-flex justify-content-center align-items-center bg-primary">
      <div className="bg-white p-4 w-400">
        <h4>JOB PORTAL - REGISTER</h4>
        <div className="divider"></div>
        <Form
          layout="vertical"
          initialValues={{ role: 'candidate' }}
          onFinish={onFinish}
        >
          <Form.Item label="Register as:" name="role">
            <Radio.Group>
              <Radio.Button value="candidate">Candidate</Radio.Button>
              <Radio.Button value="employer">Employer</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="name" label="Name">
            <input type="text" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <input type="text" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <input type="password" />
          </Form.Item>
          <button className="primary-contained-btn w-100 mt-2" type="submit">
            Register
          </button>
          <Link to="/login" className="d-block mt-2">
            Already a member? Click here to login
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
