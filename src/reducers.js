// https://webpack.js.org/guides/dependency-management/#requirecontext
const context = require.context('./pages/', true, /\.js$/);
// https://webpack.js.org/guides/dependency-management/#context-module-api
const keys = context.keys().filter(item => item.match(/\/reducers.js$/));
const reducers = keys.reduce((memo, key) => {
    memo[key.match(/([^\/]+)\/reducers.js$/)[1]] = context(key).default;
    return memo;
}, {});
export default reducers;
