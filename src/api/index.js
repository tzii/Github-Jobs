const url =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

export const getJobs = (description, location, full_time, page) => {
    return fetch(
        `${url}?description=${description || ""}&location=${
            location || ""
        }&full_time=${full_time ? "on" : ""}&page=${page}`
    ).then((res) => res.json());
};
