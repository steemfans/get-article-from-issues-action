const assert = require('assert');

module.exports.parseContent = function (content) {
  const arr1 = content.split("---");
  assert(arr1.length === 3, '[error] content format error!');
  const postInfoArr = arr1[1].trim().split("\r\n");
  const body = arr1[2];

  const postInfo = {};
  postInfoArr.forEach(info => {
    const tmp = info.split(':');
    postInfo[tmp[0].trim()] = info.substr(tmp[0].length + 1).trim()
  });

  assert('title' in postInfo, '[error] lost title field setting');
  assert('tags' in postInfo, '[error] lost tags field setting');
  assert('reward' in postInfo, '[error] lost reward field setting');
  assert('date' in postInfo, '[error] lost date field setting');

  return {
    info: postInfo,
    content: body,
  };
}
