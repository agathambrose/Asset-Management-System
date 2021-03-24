/**
 * Capitalize the first letter of the passed string value
 * @param {string} value
 */
export default function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
