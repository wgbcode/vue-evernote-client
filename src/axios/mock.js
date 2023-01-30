import baseURL from "./baseURL";

const Mock = require("mockjs");

const getQuery = (url, name) => {
  const index = url.indexOf("?");
  if (index !== -1) {
    const queryStrArr = url.substring(index + 1).split("&");
    for (var i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split("=");
      if (itemArr[0] === name) {
        return itemArr[1];
      }
    }
  }
  return null;
};

// GET 请求。先将 URL 变成正则表达式，再通过 getQuery 拿到参数。
const getMock = Mock.mock(
  RegExp(`${baseURL}/lazyload` + ".*"),
  "get",
  (options) => {
    // console.log(options);
    // console.log(getQuery(options.url, "id"));
    return { img: "https://tudingtu.cn/i/2023/01/30/i7kc99.png" };
  }
);

// POST 请求。直接通过 option.body 拿到参数。
const postMock = Mock.mock(`${baseURL}/lazyload`, "post", (options) => {
  //   console.log(options);
  //   console.log(getQuery(options.body, "name"));
  return { img: "https://tudingtu.cn/i/2023/01/30/i7kc99.png" };
});

export default { getMock, postMock };
