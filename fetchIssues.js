const { Octokit } = require("@octokit/core");

const octokit = new Octokit();

function fetchIssues() {
  return new Promise(async (resolve, reject) => {
    const res = await octokit.request("GET /repos/zeayal/blog/issues", {
      owner: "zeayal",
      repo: "blog",
    });
    if (res.status === 200) {
      // 获取issues 成功，写入数据库
      console.log("获取到issue", res.data);
      resolve(res.data);
    } else {
      console.log("获取失败", res);
      reject({
        code: "1",
        message: "获取失败",
      });
    }
  });
}

exports.fetchIssues = fetchIssues;
