import axios from "axios";
// const { API } = require("../Variables/Variables");
const API = "https://enigmatic-inlet-56197.herokuapp.com/api/v1";


export const GET_SUBJECT_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/subject/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('a_t')}`
      }
    }
  )
  return res.data;
}
export const GET_VERB_AXIOS = async () => {
  const res = await axios.get(
    `${API}/verb`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('a_t')}`,
      }
    }
  )
  return res.data;
}
export const GET_CONNECTOR_AXIOS = async () => {
  const res = await axios.get(
    `${API}/connector`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('a_t')}`,
      }
    }
  )
  return res.data;
}
export const GET_COMPETENCES_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/unit-competence/subject/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('a_t')}`,
      }
    }
  )
  return res;
}
export const GET_RELATED_UNITS_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/subject/related/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('a_t')}`,
      }
    }
  )
  return res;
}

export const GET_SUBJECT_BIBLIO_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/bibliography/subject/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('a_t')}`,
      }
    }
  )
  return res;
}