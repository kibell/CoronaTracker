import React from 'react';


import {Cards, Chart, Picker} from './components'
import styles from './components/App.Module.css'
import './App.css';
import { fetchData } from './api/index'

class App extends React.Component{
state = {
  data: {},
  country: '',

}

 async componentDidMount(){
   const fetchedData = await fetchData();
   
   this.setState({data:fetchedData})
 }

 //setting a variable equal to the property country I added
 handleCountryChange = async (country) => {
  const fetchedData = await fetchData(country);
  console.log(fetchedData)
  this.setState({data:fetchedData, country:country})

 }
  render(){
    const { data, country } = this.state

      return(
        <div className={styles.container}>
          <h1>
            <Cards data={data} />
            <Picker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country}   />
          </h1>

        </div>

      )



  }
}

export default App;
