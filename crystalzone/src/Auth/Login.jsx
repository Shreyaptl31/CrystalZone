import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // ADMIN LOGIN
        if (
            data.email === "admin@crystalzone.com" &&
            data.password === "admin123"
        ) {
            localStorage.setItem(
                "authUser",
                JSON.stringify({
                    name: "Admin",
                    email: data.email,
                    role: "admin",
                })
            );
            localStorage.setItem("isLoggedIn", true);
            navigate("/admin/dashboard");
            return;
        }

        // USER LOGIN
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (
            storedUser &&
            storedUser.email === data.email &&
            storedUser.password === data.password
        ) {
            localStorage.setItem(
                "authUser",
                JSON.stringify(storedUser)
            );
            localStorage.setItem("isLoggedIn", true);
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <Container className="auth-wrapper">
            <div className="auth-card slide-up">
                <h3>Login</h3>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />

                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />

                    <Button type="submit" className="auth-btn">
                        Login
                    </Button>
                </Form>

                <p className="switch-text">
                    New user? <Link to="/register">Register</Link>
                </p>
            </div>
        </Container>
    );
};

export default Login;
