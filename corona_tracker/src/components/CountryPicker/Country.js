import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { StylesContext } from '@material-ui/styles'

import { fetchedCountries, fetchCountries } from '../../api';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([])

useEffect(() => {
    const fetchAPI = async () => {
        setFetchedCountries(await fetchCountries());
    }

    fetchAPI()
}, [setFetchedCountries])



    return(
        <FormControl className={StylesContext.formControl}>
            <NativeSelect>
                <option value ='global'>Global</option>
                {fetchedCountries.map((country, i) => <option key={i}  value={country}>{country}</option>)}
            </NativeSelect>

        </FormControl>
    )
}


export default CountryPicker