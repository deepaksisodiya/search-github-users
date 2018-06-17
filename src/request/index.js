/**
 * fetch all users by name
 * @param name
 * @returns {Promise<Response>}
 */
export const fetchUsers = name => {
  return fetch(`https://api.github.com/search/users?q=${name}`);
};

/**
 *
 * @param username
 * @returns {Promise<Response>}
 */
export const fetchUserRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`);
};
