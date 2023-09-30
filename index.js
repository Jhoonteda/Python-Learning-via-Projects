const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const axios = require('axios');

const FILE_PATH = './data.json';

const makeCommit = async (n) => {
  if (n === 0) return createPullRequest();

  const x = Math.floor(Math.random() * 54);
  const y = Math.floor(Math.random() * 6);
  const DATE = moment()
    .subtract(1, 'years')
    .add(x, 'weeks')
    .add(y, 'days')
    .format();

  const data = {
    message: `Commit ${n}`,
  };

  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { '--date': DATE }, () => makeCommit(--n));
  });
};

const createPullRequest = async () => {
  const token = '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';
  const owner = 'samisams1';
  const repo = 'Python-Learning-via-Projects';
  const baseBranch = 'main';
  const headBranch = 'lear-python';

  const pullRequestData = {
    title: 'My Pull Request',
    body: 'This is my pull request',
    head: headBranch,
    base: baseBranch,
  };

  try {
    const response = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/pulls`,
      pullRequestData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Pull request created:', response.data.html_url);
  } catch (error) {
    console.error('Error creating pull request:', error.message);
  }
};

makeCommit(2);