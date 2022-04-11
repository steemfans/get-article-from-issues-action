const utils = require('./utils');

function testParseContent() {
  const data = `---
title: 尝试使用github手机端发文到steem
tags: cn,cn-dev,steem,witness,wherein
reward: 50
date: 2022-04-13 02:01:10
---
上周末开发了一个小工具，可以定时发文到steem。实现原理是通过github的actions功能，把仓库的issue内容整理后，发到steem.

今天来测试一下使用github的手机app能不能成功发文。

![IMG_20220412_043838.jpg](https://user-images.githubusercontent.com/801928/162827889-e8f66ceb-b544-4886-8693-9a6a753fc162.jpg)

同时测试优化后的文本解析功能，是否能正确处理文中出现的三个减号的问题。

同时测试Github的图片是否可以支持外链。

---


**ET碎碎念，每周更新，欢迎订阅，点赞，转发！**
![](https://cdn.steemitimages.com/DQmNqMmFcstxiRQqGStZSSEPEN4Z23cywF1whi91qbGTXxn/640.gif)

---
#### 好用不贵的VPS推荐
[https://1hour.win](https://1hour.win)

---

**感谢你的阅读，我是中文区见证人之一，欢迎通过 [AuthSteem](http://auth.steem.fans/sign/account-witness-vote?witness=ety001&approve=1) 来给我投票，或者打开 [https://steemitwallet.com/~witnesses](https://steemitwallet.com/~witnesses) 页面，输入 *ety001* 进行投票。**

![2.gif](https://steemitimages.com/DQmZfJo3F8NXpFx7nenQA3zTU9jg6YoRQvfyeeHgSYpdqr4/2.gif)

**中文区的见证人目前有：**
支持一下他们（按字母顺序），*一人可以有30票*：
- @cn-witnesses｜ [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=cn-witnesses)
- @ety001｜ [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=ety001)
- @familyonline-tv｜ [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=familyonline-tv)
- @fuli｜ [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=fuli)
- @justyy ｜[投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=justyy)
- @ldsn001｜ [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=ldsn001)
- @lemooljiang｜ [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=lemooljiang)
- @maiyude | [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=maiyude)
- @smt-wherein｜ [投票](https://auth.steem.fans/sign/account_witness_vote?approve=1&witness=smt-wherein)

---

**Thank you for reading.  I'm a witness. I would really appreciate your witness vote! You can vote by [SteemLogin](https://steemlogin.com/sign/account-witness-vote?witness=ety001&approve=1). Or open [https://steemitwallet.com/~witnesses](https://steemitwallet.com/~witnesses) page, input *ety001* to vote.**

![2.gif](https://steemitimages.com/DQmZfJo3F8NXpFx7nenQA3zTU9jg6YoRQvfyeeHgSYpdqr4/2.gif)`;
  const content = utils.parseContent(data);
  console.log(content);
}


function tester() {
  console.log('tester start');
  testParseContent();
  console.log('tester end');
}

tester();
