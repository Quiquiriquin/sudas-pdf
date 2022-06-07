import axios from "axios";
// const { API } = require("../Variables/Variables");
const API = "https://enigmatic-inlet-56197.herokuapp.com/api/v1";


export const GET_SUBJECT_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/subject/${id}`
  )
  return res.data;
}
export const GET_VERB_AXIOS = async () => {
  const res = await axios.get(
    `${API}/verb`
  )
  return res;
}
export const GET_CONNECTOR_AXIOS = async () => {
  const res = await axios.get(
    `${API}/connector`
  )
  return res;
}
export const GET_COMPETENCES_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/unit-competence/subject/${id}`
  )
  return res;
}
export const GET_RELATED_UNITS_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/subject/related/${id}`
  )
  return res;
}

export const GET_SUBJECT_BIBLIO_AXIOS = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await axios.get(
    `${API}/bibliography/subject/${id}`
  )
  return res;
}