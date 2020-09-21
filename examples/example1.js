import React, { useEffect, useState } from 'react'
import CountrySelect, {getDefaultCountryValue } from 'components/Util/CountrySelect'
import RegionSelect from 'components/Util/RegionSelect'

function example1() {
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')

  // todo - this interface is sloppy - remove need for getDefaultCountryValue?
  return (<div>
    <CountrySelect
      onChange={(e, c) => setCountry(c ? c.code : null) }
      value={getDefaultCountryValue(country)}
      fullWidth
    />
    <RegionSelect
      onChange={(e) => setState(e.target.value) }
      country={country}
      value={state}
    />
  </div>)
}

export default example1
