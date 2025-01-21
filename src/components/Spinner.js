import React, { Component } from 'react'
import loading from './earthLoading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='container my-4 d-flex justify-content-center align-items-center'>
            <img src={loading} alt='loading' height="40px" />
            <span>Loading ...</span>
      </div>
    )
  }
}