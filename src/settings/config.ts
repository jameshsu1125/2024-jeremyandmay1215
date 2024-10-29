export const PAGE = {
  home: 'home',
};

export const REST_PATH = {
  test: 'todos/1',
};

const error = console.error;
console.error = (...args) => {
  if (/fullPage/.test(args[0])) {
    return;
  }
  error(...args);
};
