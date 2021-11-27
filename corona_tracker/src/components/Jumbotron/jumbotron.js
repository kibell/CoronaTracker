import React, { Component } from 'react'
import cv from '../../images/cv.png'
class Jumbo extends Component {

render() {
    
    return(
        <React.Fragment>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <img src={cv}/>
  </div>
</div>   

            </React.Fragment>
    )

}

}

export default Jumbo