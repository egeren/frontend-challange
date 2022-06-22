import { LocationOptions } from 'components/LocationInput/LocationInput';
import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { getAutocomplete } from 'utils/api';

interface LandingLocationInputProps {
  onSelect: (val: string) => void;
}

function LandingLocationInput(props: LandingLocationInputProps) {
  const { onSelect } = props;
  const [value, setValue] = useState('');
  const [locations, setLocations] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value.length > 1) {
      getAutocomplete(value).then((cities) => {
        console.log(cities);
        setLocations(cities);
      });
    }
  };

  useEffect(() => {
    if (locations.length > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [locations]);

  const handleSelect = (val: string) => {
    setValue(val);
    onSelect(val);
    setVisible(false);
  };
  return (
    <div className="location-search-wrapper relative flex flex-1 items-center">
      <IoLocationOutline className="location-icon flex-shrink-0 m-0 md:text-4xl text-2xl text-white" />
      <div className="input-content-container flex flex-col pl-2">
        <label
          htmlFor="landing-location-input"
          className="w-full font-poppins font-medium md:text-base text-sm text-white"
        >
          Location
        </label>
        <input
          type="text"
          id="landing-location-input"
          value={value}
          onChange={handleOnChange}
          className="outline-none bg-transparent font-normal md:text-base text-sm text-white placeholder:text-[#dedede]"
          placeholder="Search by typing"
        />
      </div>
      <LocationOptions
        data={locations}
        visible={visible}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default LandingLocationInput;
