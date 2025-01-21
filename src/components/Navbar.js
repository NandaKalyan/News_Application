import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    handleLanguageChange = (event) => {
        this.props.onLanguageChange(event.target.value);
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light mx-4" href="/">🦩NewsFlamingo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{
                            backgroundImage: 'none',
                            position: 'relative',
                            width: '30px',
                            height: '20px'
                        }}>
                            <span style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '4px',
                                backgroundColor: 'white',
                                borderRadius: '2px'
                            }}></span>
                            <span style={{
                                position: 'absolute',
                                top: '8px',
                                left: 0,
                                width: '100%',
                                height: '4px',
                                backgroundColor: 'white',
                                borderRadius: '2px'
                            }}></span>
                            <span style={{
                                position: 'absolute',
                                top: '16px',
                                left: 0,
                                width: '100%',
                                height: '4px',
                                backgroundColor: 'white',
                                borderRadius: '2px'
                            }}></span>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link text-light btn btn-primary mx-2" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-info mx-2" to="/About">About</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-danger mx-2" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-success mx-2" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-secondary mx-2" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-success mx-2" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-warning mx-2" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-danger mx-2" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light btn btn-primary mx-2" to="/technology">Technology</Link></li>
                        </ul>

                        {/* Language Selection Dropdown */}
                        <div className="d-flex justify-content-end">
                            <select
                                className="form-select w-auto mx-4"
                                value={this.props.selectedLanguage}
                                onChange={this.handleLanguageChange}
                            >
                                <option value="en">English</option>
                                <option value="hi">Hindi</option>
                                <option value="te">Telugu</option>
                                <option value="ta">Tamil</option>
                            </select>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
