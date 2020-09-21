/* eslint-disable no-use-before-define */
import React from 'react';
import { InputLabel, TextField, Select, MenuItem } from '@material-ui/core';
import CountryRegionData from 'country-region-data'

export default function RegionSelect({ country,  ...props }) {
  const countryData = (CountryRegionData
    .find((c) => c.countryShortCode == country))
  const regionOptions = (countryData && countryData.regions.length)
    ?  countryData.regions.map(({ shortCode, name }) =>
        (<MenuItem value={shortCode}>{name}</MenuItem>))
    : []

  const label = props.label
    ? props.label
    : country == 'US'
      ? 'Choose a state'
      : 'Choose a region/province'

  return (
    <>
      <InputLabel id="region-select-label">{label}</InputLabel>
      <Select
        labelId="region-select-label"
        InputLabelProps={props.InputLabelProps || {shrink: true}}
        {...props}
      >
        {regionOptions}
      </Select>
    </>
  );
}

