import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  
  state = {
    progress: 0,
    language: 'en' // Default language
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  handleLanguageChange = (newLang) => {
    this.setState({ language: newLang });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar 
            onLanguageChange={this.handleLanguageChange} 
            selectedLanguage={this.state.language} 
          />
          <LoadingBar
            color="pink"
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="general" language={this.state.language} key={`general-${this.state.language}`} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="general" language={this.state.language} key={`general-${this.state.language}`} />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="business" language={this.state.language} key={`business-${this.state.language}`} />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="entertainment" language={this.state.language} key={`entertainment-${this.state.language}`} />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="science" language={this.state.language} key={`science-${this.state.language}`} />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="sports" language={this.state.language} key={`sports-${this.state.language}`} />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="technology" language={this.state.language} key={`technology-${this.state.language}`} />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  category="health" language={this.state.language} key={`health-${this.state.language}`} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
