import axios from "axios";
import encodeCredentials from "./functions";

export async function fetchData() {
  const token = encodeCredentials("coalition", "skills-test");
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

  const config = {
    headers: {
      Authorization: `Basic ${token}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}
