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
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (u) =>
                u.email === data.email &&
                u.password === data.password
        );

        if (!user) {
            alert("Invalid credentials");
            return;
        }

        localStorage.setItem("authUser", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
    };

    return (
        <Container fluid className="auth-bg">
            <div className="auth-glass-card">
                <h2>Welcome back</h2>
                <p className="auth-subtitle">
                    Login to continue your journey ✨
                </p>

                <Form onSubmit={handleSubmit(onSubmit)}>
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
                        Login
                    </Button>
                </Form>

                <div className="auth-footer">
                    <span>New here?</span>
                    <Link to="/register">Create an account</Link>
                </div>
            </div>
        </Container>
    );
};

export default Login;
