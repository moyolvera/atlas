const data: PasswordRecord[] = [
  {
    id: '1',
    label: 'Spotify',
    date: '11/01/21',
    password: 'password'
  },
  {
    id: '2',
    label: 'Netflix',
    date: '12/01/21',
    password: 'password'
  },
  {
    id: '3',
    label: 'Disney +',
    date: '1/02/21',
    password: 'password'
  },
  {
    id: '4',
    label: 'AXXA',
    date: '7/02/21',
    password: 'password'
  },
  {
    id: '5',
    label: 'Facebook',
    date: '7/02/21',
    password: 'password'
  },
  {
    id: '6',
    label: 'Twitter',
    date: '9/02/21',
    password: 'password'
  },
  {
    id: '7',
    label: 'Amazon',
    date: '11/02/21',
    password: 'password'
  }
];

async function getPasswords() {
  /**
   * This is a totally secure endpoint of your precious API
   */
  const fetching = await new Promise<PasswordRecord[]>(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2500);
  });

  return fetching;
}

export { getPasswords };
