import axios from "axios";

axios.defaults.baseURL =
  "https://www.fastmock.site/mock/0b084ebb8f056de8b07b02b4563e2f27/evernote";

// 若需要，还可以进行二次封装。type 和 data 两个参数可以不传。
const request = (url, type = "GET", data = {}) => {
  const options = {
    url,
    method: type,
  };
  if (type.toLowerCase() === "get") {
    options.params = data;
  } else {
    options.data = data;
  }
  return new Promise((resolved, rejected) =>
    axios(options)
      .then((res) => {
        console.log(res);
        resolved(res.data);
      })
      .catch((err) => {
        console.log(err);
        rejected(err);
      })
  );
};

export default request;
