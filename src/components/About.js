import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center" >
            <h1 style={{marginTop:"70px"}} >About NewsFlamingo🦩</h1>
            <p className="lead">
              NewsFlamingo is a dynamic and user-friendly news application that brings you the latest top headlines from various categories. Stay updated with breaking news, trending topics, and more—all at your fingertips.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide fast, accurate, and relevant news in a clean, easy-to-read interface. We strive to keep users informed with up-to-date news articles sourced from credible outlets.
            </p>
          </div>
          <div className="col-12 col-md-12">
            <h3>Our Team</h3>
            <p>
              We are a passionate team of developers, journalists, and tech enthusiasts working together to bring reliable and timely news to the world. Our team is committed to delivering news that matters, in a format that's easy to digest.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h3>Get in Touch</h3>
            <p>If you have any questions, feel free to <a href="mailto:nandakalyan2002@gmail.com">contact us</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
