const core = require('@actions/core');
const github = require('@actions/github');
const utils = require('./utils');
const moment = require('moment-timezone');

async function main() {
  const issue_number = core.getInput('issue_number');
  try {
    if (!issue_number) {
      await get();
    } else {
      await close(issue_number);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function get() {
  const token = core.getInput('token');
  const repository = core.getInput('repository');
  const tz = core.getInput('tz');

  const repoArr = repository.split('/');
  const owner = repoArr[0];
  const repo = repoArr[1];

  const octokit = github.getOctokit(token);
  const issueList = await octokit.rest.issues.listForRepo({
    owner,
    repo,
    state: 'open',
    direction: 'asc',
    per_page: 100,
    page: 1,
  });

  if (issueList.data.length === 0) {
    core.setOutput('issue_id', 0);
    return;
  }

  let result;
  let result_issue_numer;

  const now = moment().utc();

  // console.log('issueList:', issueList.data);
  console.log('now:', now);

  issueList.data.forEach(async (post) => {
    console.log('user_info:', post.user.login, owner);
    if (post.user.login !== owner) {
      await close(post.number);
      return;
    }
    const bodyInfo = utils.parseContent(post.body);
    console.log('bodyInfo:', bodyInfo);
    const scheduleDate = moment.tz(bodyInfo.info.date, tz).utc();
    console.log('schedule_data:', scheduleDate);
    if (scheduleDate.isBefore(now)) {
      console.log('result: ', result);
      if (result === undefined) {
        result = bodyInfo;
        result_issue_numer = post.number;
      } else {
        const resultDate = moment.tz(result.info.date, tz).utc();
        if (scheduleDate.isBefore(resultDate)) {
          result = bodyInfo;
          result_issue_numer = post.number;
        }
      }
    }
  });

  console.log('result:', result);

  if (result) {
    core.setOutput('issue_number', result_issue_numer);
    core.setOutput('title', result.info.title);
    core.setOutput('tags', result.info.tags);
    core.setOutput('reward', result.info.reward);
    core.setOutput('content', result.content);
  } else {
    core.setOutput('issue_number', 0);
  }
  return;
}

async function close(issue_number) {
  const token = core.getInput('token');
  const repository = core.getInput('repository');
  const repoArr = repository.split('/');
  const owner = repoArr[0];
  const repo = repoArr[1];

  const octokit = github.getOctokit(token);
  await octokit.rest.issues.update({
    owner,
    repo,
    issue_number,
    state: 'closed',
  });
}

main();
