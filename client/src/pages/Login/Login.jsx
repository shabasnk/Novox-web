import React from "react";
import "./Login.css"
import novoxLogo from "../../assets/images/novox-logo.jpg"
import studentTeacherImage from "../../assets/images/Students and Teachers.png"
import { RiRadarLine, RiUserStarLine, RiBarChartBoxLine } from "@remixicon/react";

const Login = () => {
    return(
        <div className="login-page">
            <div className="left-section">
                <div className="left-content">
                    <div className="logo">
                        <img src={novoxLogo} alt="Novox Edtech Logo" className="Logo-image" />
                    </div>

                    <div className="hero">
                        <h1>
                            <span>Welcome to Novox</span>
                            <span>Edtech</span>
                        </h1>
                        <p>transforming attendance management with smart technologies</p>
                    </div>

                    <div className="features-container">
                        <div className="feature-item">
                            <div className="feature-icon-wrapper">
                                <RiRadarLine size={24} color="#007FFF" />
                            </div>
                            <div className="feature-text">
                                <span className="feature-title">Real-time Tracking</span>
                                <span className="feature-description">Monitor attendance and activities instantly.</span>
                            </div>
                        </div>
                        
                        <div className="feature-item">
                            <div className="feature-icon-wrapper">
                                <RiUserStarLine size={24} color="#7C3AED" />
                            </div>
                            <div className="feature-text">
                                <span className="feature-title">Student & Staff Portal</span>
                                <span className="feature-description">Unified platform for all institutional members.</span>
                            </div>
                        </div>
                        
                        <div className="feature-item">
                            <div className="feature-icon-wrapper">
                                <RiBarChartBoxLine size={24} color="#007FFF" />
                            </div>
                            <div className="feature-text">
                                <span className="feature-title">Instant Reports</span>
                                <span className="feature-description">Generate comprehensive data insights in seconds.</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer">© 2026 Novox Edtech</div>
                </div>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <div className="login-container">
                    <div className="login-box">
                        <h2 className="login-heading">
                            <span className="management-text">Novox Edtech Management</span>
                            <span className="software-line">Software</span>
                        </h2>
                        <span className="signin-text">Sign in to your dashboard</span>

                        <form className="login-form">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    placeholder="Email Address"
                                    className="login-input"
                                />
                            </div>
                            
                            <div className="input-group">
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    className="login-input"
                                />
                            </div>

                            <div className="form-options">
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>

                            <button type="submit" className="login-button">
                                LOGIN
                            </button>
                        </form>

                        {/* New Here Section with Lines */}
                        <div className="new-here-section">
                            <div className="divider">
                                <span className="divider-line"></span>
                                <span className="divider-text">New here?</span>
                                <span className="divider-line"></span>
                            </div>
                            
                            <button className="create-account-button">
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;