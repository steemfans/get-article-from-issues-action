const assert = require('assert');

module.exports.parseContent = function (content) {
  const arr1 = content.split("---\r\n");
  assert(arr1.length === 3, '[error] content format error!');
  const postInfoArr = arr1[1].split("\r\n");
  const body = arr1[2].trim();

  const postInfo = {};
  postInfoArr.forEach(info => {
    const tmp = info.split(':');
    if (tmp.length === 2) {
      postInfo[tmp[0].trim()] = tmp[1].trim();
    }
  });

  assert('title' in postInfo, '[error] lost title');
  assert('tags' in postInfo, '[error] lost tags');
  assert('reward' in postInfo, '[error] lost reward');

  return {
    info: postInfo,
    content: body,
  };
}
