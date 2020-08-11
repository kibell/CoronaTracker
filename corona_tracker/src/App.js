import React from 'react';


import {Cards, Chart, Picker} from './components'
import styles from './components/App.Module.css'
import './App.css';
import { fetchData } from './api/index'

class App extends React.Component{
state = {
  data: {},

}

 async componentDidMount(){
   const fetchedData = await fetchData();
   
   this.setState({data:fetchedData})
 }

  render(){
    const { data } = this.state

      return(
        <div className={styles.container}>
          <h1>
            <Cards data={data} />
            <Picker />
            <Chart />
          </h1>

        </div>

      )



  }
}

export default App;
