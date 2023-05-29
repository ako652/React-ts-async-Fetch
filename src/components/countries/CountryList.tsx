import React, { useEffect, useState } from "react";
type Countrys = {
  name: {
    common: string;
    official: string;
    nativeName: {
      ara: {
        official: string;
        common: string;
      };
    };
  };
  cca2:string,
  flags:{
    png:string
  }
};

export default function CountryList() {
  const [countries, setCountries] = useState<Countrys[]>([]);
  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => error);
  }, []);
  return <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}> <h1>CountryList</h1>{countries.map((country)=>{return(
    <div key={country.cca2} >
      <p>{country.name.common}</p>
      <p>{country.name.official}</p>
      <img src={country.flags.png}  style={{width:'200px'}} />
    </div>
  )})}</div>;
}
