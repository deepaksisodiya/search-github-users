/**
 *
 * @param name
 * @param page
 * @returns {Promise<Response>}
 */
export const fetchUsers = (name, page) => {
  return fetch(
    `https://api.github.com/search/users?per_page=4&page=${page}&q=${name}`
  );
};

/**
 *
 * @param username
 * @returns {Promise<Response>}
 */
export const fetchUserRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`);
};
