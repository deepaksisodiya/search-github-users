import { sortUsers, SORT_BY } from './index';

const data = [
  {
    login: 'zaxcx',
    id: 9192,
    node_id: 'MDQ6VXNlcjkxOTI=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/9192?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/deepak',
    html_url: 'https://github.com/deepak',
    followers_url: 'https://api.github.com/users/deepak/followers',
    following_url: 'https://api.github.com/users/deepak/following{/other_user}',
    gists_url: 'https://api.github.com/users/deepak/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/deepak/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/deepak/subscriptions',
    organizations_url: 'https://api.github.com/users/deepak/orgs',
    repos_url: 'https://api.github.com/users/deepak/repos',
    events_url: 'https://api.github.com/users/deepak/events{/privacy}',
    received_events_url: 'https://api.github.com/users/deepak/received_events',
    type: 'User',
    site_admin: false,
    score: 130.07014
  },
  {
    login: 'deepak1556',
    id: 964386,
    node_id: 'MDQ6VXNlcjk2NDM4Ng==',
    avatar_url: 'https://avatars1.githubusercontent.com/u/964386?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/deepak1556',
    html_url: 'https://github.com/deepak1556',
    followers_url: 'https://api.github.com/users/deepak1556/followers',
    following_url:
      'https://api.github.com/users/deepak1556/following{/other_user}',
    gists_url: 'https://api.github.com/users/deepak1556/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/deepak1556/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/deepak1556/subscriptions',
    organizations_url: 'https://api.github.com/users/deepak1556/orgs',
    repos_url: 'https://api.github.com/users/deepak1556/repos',
    events_url: 'https://api.github.com/users/deepak1556/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/deepak1556/received_events',
    type: 'User',
    site_admin: false,
    score: 84.480804
  },
  {
    login: 'aswes',
    id: 15645007,
    node_id: 'MDQ6VXNlcjE1NjQ1MDA3',
    avatar_url: 'https://avatars2.githubusercontent.com/u/15645007?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/DeepakRattan',
    html_url: 'https://github.com/DeepakRattan',
    followers_url: 'https://api.github.com/users/DeepakRattan/followers',
    following_url:
      'https://api.github.com/users/DeepakRattan/following{/other_user}',
    gists_url: 'https://api.github.com/users/DeepakRattan/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/DeepakRattan/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/DeepakRattan/subscriptions',
    organizations_url: 'https://api.github.com/users/DeepakRattan/orgs',
    repos_url: 'https://api.github.com/users/DeepakRattan/repos',
    events_url: 'https://api.github.com/users/DeepakRattan/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/DeepakRattan/received_events',
    type: 'User',
    site_admin: false,
    score: 70.48101
  },
  {
    login: 'neeraj',
    id: 15071438,
    node_id: 'MDQ6VXNlcjE1MDcxNDM4',
    avatar_url: 'https://avatars2.githubusercontent.com/u/15071438?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/deepakpathania',
    html_url: 'https://github.com/deepakpathania',
    followers_url: 'https://api.github.com/users/deepakpathania/followers',
    following_url:
      'https://api.github.com/users/deepakpathania/following{/other_user}',
    gists_url: 'https://api.github.com/users/deepakpathania/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/deepakpathania/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/deepakpathania/subscriptions',
    organizations_url: 'https://api.github.com/users/deepakpathania/orgs',
    repos_url: 'https://api.github.com/users/deepakpathania/repos',
    events_url: 'https://api.github.com/users/deepakpathania/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/deepakpathania/received_events',
    type: 'User',
    site_admin: false,
    score: 69.94201
  }
];

describe('sortUsers', () => {
  it('should sort users by a-z', () => {
    expect(sortUsers(data, SORT_BY.A_Z)).toMatchSnapshot();
  });

  it('should sort users by z-a', () => {
    expect(sortUsers(data, SORT_BY.Z_A)).toMatchSnapshot();
  });

  it('should sort users by rank up', () => {
    expect(sortUsers(data, SORT_BY.RANK_UP)).toMatchSnapshot();
  });

  it('should sort users by rank down', () => {
    expect(sortUsers(data, SORT_BY.RANK_DOWN)).toMatchSnapshot();
  });
});
