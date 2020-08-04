const mongoose = require("mongoose");
/**
 * ```js
 * {
    url: 'https://api.github.com/repos/zeayal/blog/issues/1',
    repository_url: 'https://api.github.com/repos/zeayal/blog',
    labels_url: 'https://api.github.com/repos/zeayal/blog/issues/1/labels{/name}',
    comments_url: 'https://api.github.com/repos/zeayal/blog/issues/1/comments',
    events_url: 'https://api.github.com/repos/zeayal/blog/issues/1/events',
    html_url: 'https://github.com/zeayal/blog/issues/1',
    id: 400958680,
    node_id: 'MDU6SXNzdWU0MDA5NTg2ODA=',
    number: 1,
    title: '#01 - 在 README.md 中生成项目目录结构',
    user: [Object],
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2019-01-19T04:11:48Z',
    updated_at: '2019-01-19T04:11:48Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: '# 生成项目的目录结构\r\n' +
      '\r\n' +
      '> 需求：当编写项目文档时，需要在 README.md 中对项目整体的目录结构以及文件的功能进行说明。\r\n' +
      '\r\n' +
      '> 系统：macOS Mojave Version 10.14.2(18c54)\r\n' +
      '\r\n' +
      '> 步骤：1.使用 Homebrew 安装 tree 2.使用 tree 在控制台生产当前目录树 > tree.text 3.复制目录树文本到 README.md 中\r\n' +
      '\r\n' +
      '## 1.使用 Homebrew 安装 tree \r\n' +
      '\r\n' +
      '``` bash\r\n' +
      '  // $ 表示这是一个命令行，$ 不需要输入\r\n' +
      '  $ brew install tree\r\n' +
      '```\r\n' +
      '\r\n' +
      '<img width="1406" alt="01-brew install tree" src="https://user-images.githubusercontent.com/28499365/51422060-40c9bd80-1be3-11e9-9c31-a920cafb2408.png">\r\n' +
      '\r\n' +
      '\r\n' +
      '<img width="1355" alt="02-brew install tree completed" src="https://user-images.githubusercontent.com/28499365/51422062-4e7f4300-1be3-11e9-9896-89f689902bdd.png">\r\n' +
      '\r\n' +
      '## 2.使用 tree 在控制台生产当前目录树\r\n' +
      '\r\n' +
      '```\r\n' +
      '// 因为实例项目为 js 项目，所以忽略了 node_modules，可根据真实项目选择性忽略文件目录，防止文件树过长\r\n' +
      '$ tree -I node_modules > tree.text\r\n' +
      '```\r\n' +
      '\r\n' +
      '\r\n' +
      '\r\n' +
      '<img width="809" alt="03-generage_tree" src="https://user-images.githubusercontent.com/28499365/51422070-5ccd5f00-1be3-11e9-91ab-7c39dc77a605.png">\r\n' +
      '\r\n' +
      '\r\n' +
      '\r\n' +
      '\r\n' +
      '## 3.复制目录树文本到 README.md 中\r\n' +
      '\r\n' +
      '\r\n' +
      '<img width="1154" alt="04-copy_directory_tree_txt_to_readme" src="https://user-images.githubusercontent.com/28499365/51422073-622aa980-1be3-11e9-869a-14fdac23d8b4.png">\r\n' +
      '\r\n' +
      '\r\n' +
      '\r\n' +
      '4.done ！接下来可以根据具体需求写具体注释了。\r\n' +
      '\r\n',
    performed_via_github_app: null
  }
 * ```
 */
const IssueSchema = mongoose.Schema({
  url: String,
  repository_url: String,
  labels_url: String,
  comments_url: String,
  events_url: String,
  html_url: String,
  id: Number,
  node_id: String,
  number: Number,
  title: String,
  user: Array,
  labels: Array,
  state: String,
  locked: Boolean,
  assignee: Object,
  assignees: Array,
  milestone: Object,
  comments: Number,
  created_at: Date,
  updated_at: Date,
  closed_at: Date,
  author_association: String,
  active_lock_reason: String,
  body: String,
  performed_via_github_app: String,
});

module.exports = mongoose.model("Issue", IssueSchema);
