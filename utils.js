const assert = require('assert');

module.exports.parseContent = function (content) {
  const re1 = /^-{3}$/gm;
  const position = [];
  while ((match = re1.exec(content)) != null) {
    position.push(match.index);
  }
  console.log('position:', position);
  assert(position.length >= 2, '[error] content format error!');
  const header = content.substr(position[0]+3, position[1]-position[0]-3);
  const body = content.substr(position[1]+3);
  const postInfo = {};
  const re2 = /^([\w]+):(.*)$/gm
  const headerMatch = [...header.matchAll(re2)];
  headerMatch.forEach(head => {
    postInfo[head[1].trim()] = head[2].trim();
  });
  return {
    info: postInfo,
    content: body,
  };
}
