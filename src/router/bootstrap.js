// 导入所有目录所有文件,第一个参数是路径,第二个参数控制是否遍历子目录,第三个参数指文件类型
// 可打印 files.key() 查看详情
const files = require.context("../components/bootstrap", true, /\.vue$/);
// 存储所有导入的模块
const modules = {};
// 存储所有的路由配置中的 path
const modulesPath = [];
// 存储每一个子路由
const children = [];
files.keys().forEach((key, index) => {
  modules[key.replace(/(\.\/|\.vue)/g, "")] = files(key).default;
  modulesPath.push(key.slice(2, -4).toLowerCase());
  const obj = {};
  obj.path = modulesPath[index];
  for (let item in modules) {
    if (item === key.slice(2, -4)) {
      obj.component = modules[key.slice(2, -4)];
    }
  }
  children.push(obj);
});

// console.log(children);

export default [...children];
