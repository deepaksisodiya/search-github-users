export const sortUsers = (users, sortBy) => {
  if (sortBy === SORT_BY.RANK_UP) {
    return users.sort((obj1, obj2) => obj1.score - obj2.score);
  }

  if (sortBy === SORT_BY.RANK_DOWN) {
    return users.sort((obj1, obj2) => obj2.score - obj1.score);
  }

  if (sortBy === SORT_BY.A_Z) {
    return users.sort((obj1, obj2) => {
      const nameA = obj1.login.toUpperCase();
      const nameB = obj2.login.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

  if (sortBy === SORT_BY.Z_A) {
    return users.sort((obj1, obj2) => {
      const nameA = obj1.login.toUpperCase();
      const nameB = obj2.login.toUpperCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    });
  }
};

export const SORT_BY = {
  A_Z: 'a-z',
  Z_A: 'z-a',
  RANK_UP: 'rankUp',
  RANK_DOWN: 'rankDown'
};
