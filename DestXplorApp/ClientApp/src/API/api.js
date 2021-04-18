import axios from 'axios';

const DEVELOPMENT_BASE_URL = 'https://localhost:44380/api/';
const PRODUCTION_BASE_URL = 'https://destxplor.azurewebsites.net/api/';
const TRIPOSO_BASE_URL = 'https://www.triposo.com/api/20210317/';

export const createContactAPIEndpoint = (productionURL) => {

  let url = DEVELOPMENT_BASE_URL + 'Contact/';
  if (productionURL)
    url = PRODUCTION_BASE_URL + 'Contact/';

  return {
    fetchAll: () => axios.get(url),
    fetchById: id => axios.get(url + id),
    create: newRecord => axios.post(url, newRecord),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: id => axios.delete(url + id)
  };
}

export const createTopCitiesByCountryAPIEndpoint = (country) => {

  const endpoint = `location.json?part_of=${country}&tag_labels=city&fields=id,name,score,snippet&order_by=-score`;

  const url = TRIPOSO_BASE_URL + endpoint;

  return {
    fetchAll: () => axios.get(url, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
    fetchById: id => axios.get(url + id, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
  };
}

export const createMainRegionsByCountryAPIEndpoint = (country) => {

  const endpoint = `location.json?parent_id=${country}`;

  let url = TRIPOSO_BASE_URL + endpoint;

  return {
    fetchAll: () => axios.get(url, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
    fetchById: id => axios.get(url + id, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
  };
}

export const createFindCountryByNameAPIEndpoint = (country) => {

  const endpoint = `location.json?tag_labels=country&annotate=trigram:${country}&trigram=>=0.3&fields=id,name,score,snippet&order_by=-score`;

  let url = TRIPOSO_BASE_URL + endpoint;

  return {
    fetchAll: () => axios.get(url, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
    fetchById: id => axios.get(url + id, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
  };
}

export const createFindPOIByCountryAPIEndpoint = (country) => {

  const endpoint = `poi.json?location_id=${country}&order_by=-score&fields=name,best_for,coordinates,score,id`;

  let url = TRIPOSO_BASE_URL + endpoint;

  return {
    fetchAll: () => axios.get(url, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
    fetchById: id => axios.get(url + id, {
      headers: {
        'X-Triposo-Account': `${process.env.REACT_APP_ACCOUNT_ID}`,
        'X-Triposo-Token': `${process.env.REACT_APP_API_TOKEN}`,
      }
    }),
  };
}