export const apiUrl = "https://renzolua.com/api/";

export const get = (url: string) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "cors",
    withCredentials: true,
  };

  return fetch(apiUrl + url, options);
};
