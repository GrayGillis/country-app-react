import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import axios from 'axios';

const api = 'https://restcountries.eu/rest/v2/name/';

function App() {
  const [country, setCountry] = useState('');
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');
  const [currency, setCurrency] = useState('');
  const [language, setLanguage] = useState('');
  const [flag, setFlag] = useState('');

  const getCountryInfo = (country) => {
    axios({
      method: 'GET',
      url: `${api}${country}`
    })
    .then((res) => {
      console.log(res.data);
      setCapital(res.data[0].capital)
      // need the number to have commas
      setPopulation(res.data[0].population)
      setCurrency(res.data[0].currencies[0].name)
      setLanguage(res.data[0].languages[0].name)
      // flag comes in really big
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