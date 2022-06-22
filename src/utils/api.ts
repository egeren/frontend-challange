import axios from 'axios';
import { getCityByPrediction } from './helper';

const googleApiKey = process.env.REACT_APP_GOOGLE_KEY;

export const getAutocomplete = async (query: string) => {
  const data = axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json',
      {
        params: {
          input: query,
          key: googleApiKey,
        },
      }
    )
    .then((res) => {
      if (res.data.status === 'ZERO_RESULTS') {
        return Promise.reject('No results');
      }
      const cities: string[] = [];
      console.log(res.data);
      res.data.predictions.map((prediction: any) => {
        const text = prediction.structured_formatting.main_text;
        if (!cities.includes(text)) cities.push(text);
      });
      return cities;
    });
  return data;
};
