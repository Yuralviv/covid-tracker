import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
