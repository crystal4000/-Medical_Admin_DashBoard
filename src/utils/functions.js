export function encodeCredentials(username, password) {
  const credentials = `${username}:${password}`;
  return btoa(credentials);
}

export const monthAbbreviations = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

export function formatDate(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [month, day, year] = dateString.split("/");

  const monthIndex = parseInt(month, 10) - 1;
  const dayInt = parseInt(day, 10);
  const yearInt = parseInt(year, 10);

  return `${months[monthIndex]} ${dayInt}, ${yearInt}`;
}

export default encodeCredentials;
