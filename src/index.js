const resolve = (acc, fn) => fn(acc);

const pipe = (...fns) => arg => fns.reduce(resolve, arg);

export default pipe;
