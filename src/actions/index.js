import axios from "axios";

const ROOT_URL = "http://localhost:3001";

export const FETCH_ALL_HACKATHONS = "FETCH_ALL_HACKATHONS";
export const GET_HACKATHON_DETAILS = "GET_HACKATHON_DETAILS";

export function fetchAllHackathons() {
  const url = `${ROOT_URL}/hackathons`;
  const request = axios.get(url);

  return {
    type: FETCH_ALL_HACKATHONS,
    payload: request
  };
}

export function getHackathon(id) {
  const url = `${ROOT_URL}/hackathon/${id}`;
  const request = axios.get(url);
  return {
    type: GET_HACKATHON_DETAILS,
    payload: request
  };
}
