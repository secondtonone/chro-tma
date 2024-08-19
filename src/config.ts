const config = {
  isBrowser:
    process.env.IS_BROWSER === undefined
      ? true
      : (process.env.IS_BROWSER as unknown as boolean),
};

export default config;
