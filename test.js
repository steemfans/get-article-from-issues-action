const utils = require('./utils');

function testParseContent() {
  const data = `---
title: This is the first test post from github issue
tags: test,test1,test2,test3
reward: 50
date: 2022-04-10 0:10:08
---

Hi, world!

![image.png](https://cdn.steemitimages.com/DQmTZEQmwmUMsptbSqBs8GsvjoipzEaWYkfFXynixE2QEUh/image.png)
`;
  const content = utils.parseContent(data);
  console.log(content);
}


function tester() {
  console.log('tester start');
  testParseContent();
  console.log('tester end');
}

tester();
