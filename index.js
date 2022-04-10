const assert = require('assert');
const core = require('@actions/core');
const github = require('@actions/github');

async function main() {
  const token = core.getInput('token');
  const repo = core.getInput('repo');
  const owner = core.getInput('owner');

  const octokit = github.getOctokit(token);
  const issueList = await octokit.rest.issues.listForRepo({
    owner,
    repo,
    state: 'open',
    direction: 'asc',
    per_page: 10,
    page: 1,
  });

  console.log('issueList:', issueList);

}

main();
