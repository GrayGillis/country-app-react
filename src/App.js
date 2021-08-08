import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Country from './Country';
import axios from 'axios';

const api = 'https://restcountries.eu/rest/v2/name/';

const countryEffect = () => {
  console.log('country added!')
}

function App() {
  const [country, setCountry] = useState('');
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');
  const [currency, setCurrency] = useState('');
  const [language, setLanguage] = useState('');
  const [flag, setFlag] = useState('');

  useEffect(() => {
    return (
      countryEffect()
    )
  },[country])

  const changeNumber = newPopulation => {
    let formatNumber = (Number(newPopulation)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let splitArray = formatNumber.split('.');
    if(splitArray.length>1){
      formatNumber = splitArray[0];
    }
    return(formatNumber);
  };

  const getCountryInfo = (country) => {
    axios({
      method: 'GET',
      url: `${api}${country}`
    })
    .then((res) => {
      console.log(res.data);//rest api object
      setCapital(res.data[0].capital)
      const newPopulation = res.data[0].population
      setPopulation(changeNumber(newPopulation))
      setCurrency(res.data[0].currencies[0].name)
      setLanguage(res.data[0].languages[0].name)
      setFlag(res.data[0].flag)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
        <button onClick={() => { getCountryInfo(country) }}>Submit</button>
      </div>
      <div className="body">
        <section>
          <h4>

          </h4>
          <h2 className="country">Country: {country}</h2>
          <h2 className="capital">Capital: {capital}</h2>
          <h2 className="population">Population: {population}</h2>
          <h2 className="currency">Currency: {currency}</h2>
          <h2 className="language">Language: {language}</h2>

          <img src={flag} alt="" />
        </section>
      </div>
    </>
  );
}

export default App;