const utils = require('./utils');

function testParseContent() {
  const data = `---\r\ntitle: This is the first test post from github issue\r\ntags: test,test1,test2,test3\r\nreward: 50\r\ndate: 2022-04-10 0:10:08\r\n---\r\n\r\nHi, world!\r\n\r\n![image.png](https://cdn.steemitimages.com/DQmTZEQmwmUMsptbSqBs8GsvjoipzEaWYkfFXynixE2QEUh/image.png)`;
  const content = utils.parseContent(data);
  console.log(content);
}


function tester() {
  console.log('tester start');
  testParseContent();
  console.log('tester end');
}

tester();
