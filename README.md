# Process Issues for Posting to Steem Action
This action is used to get eligible issue and process it for preparing posting to Steem.

## Inputs

### `repository`
**Required** Your repository name, like username/repo.

### `token`
**Required** The token of the repo.

### `tz`
The timezone setting. Default: UTC.

### `issue_number`
If you give this number, this issue will set closed.

## Outputs

### `issue_number`
The number of the issue that matches the filter

### `title`
The title of the article that is found

### `content`
The content of the article that is found

### `tags`
The tags of the article that is found

### `reward`
The reward setting of the article that is found

## Example usage

Then create workflow step like this:

### Processer
```
- name: 'Processer'
  id: 'processor'
  uses: 'steemfans/process-issues-for-posting-to-steem-action@master'
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    repo: 'automation'
    owner: 'ety001'
    tz: 'Asia/Shanghai'
```

### Close Issue
```
- name: 'Close Issue'
  uses: 'steemfans/process-issues-for-posting-to-steem-action@master'
  with:
    issue_number: ${{ steps.processor.outputs.issue_number }}
    token: ${{ secrets.GITHUB_TOKEN }}
    repo: 'automation'
    owner: 'ety001'
```

## Vote Me

If you think this tool is awesome, please give me a witness vote.
Thank you!

My witness name: **ety001**.

or use direct link to vote:
[https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=ety001](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=ety001)
