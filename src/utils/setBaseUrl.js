import axios from "axios";

/**
 * Set base url to use for all api requests
 * @param {string} url
 * @example
 *
 * setBaseUrl("http://some-api.com")
 * axios.get("/users") //=> axios.get("http://some-api.com/users")
 */
export default function setBaseUrl(url) {
  axios.defaults.baseURL = url;
}
