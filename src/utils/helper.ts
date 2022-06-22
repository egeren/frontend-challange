import { IFilterData } from 'redux/slices/filtersSlice';

export const getCityByPrediction = (prediction: any) => {
  if (prediction.terms.length < 2) return;
  if (prediction.terms.length > 1) {
    return prediction.terms[prediction.terms.length - 2].value;
  }
};

export const getFilterQuery = (filters: IFilterData) => {
  const params = {
    'datetime_utc.gt': filters.startingDate ? filters.startingDate : undefined,
    'datetime_utc.lte': filters.endingDate ? filters.endingDate : undefined,
    'taxonomies.name': filters.eventType ? filters.eventType : undefined,
    q: filters.keywords ? filters.keywords : undefined,
  };

  return params;
};
