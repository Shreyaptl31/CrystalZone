import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find((u) => u.email === data.email);
        if (userExists) {
            alert("User already exists");
            return;
        }

        const newUser = {
            ...data,
            role: "user",
            id: Date.now(),
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful!");
        navigate("/login");
    };

    return (
        <Container fluid className="auth-bg">
            <div className="auth-glass-card">
                <h2>Create your account</h2>
                <p className="auth-subtitle">
                    Join us and explore exclusive offers ✨
                </p>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <input
                            type="text"
                            required
                            {...register("name")}
                        />
                        <label>Full Name</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            required
                            {...register("email")}
                        />
                        <label>Email Address</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            required
                            {...register("password")}
                        />
                        <label>Password</label>
                    </div>

                    <Button type="submit" className="gradient-btn">
                        Create Account
                    </Button>
                </Form>

                <div className="auth-footer">
                    <span>Already have an account?</span>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </Container>
    );
};

export default Register;
