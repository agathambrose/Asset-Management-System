import axios from "axios";

/**
 * Set the passed token to the header to be sent with every request
 * @param {string} token
 */
export default function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
