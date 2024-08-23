const config = {
  isBrowser:
    process.env.IS_BROWSER === undefined
      ? false
      : (process.env.IS_BROWSER as unknown as boolean),
  apiUrl: process.env.API_URL === undefined ? '' : process.env.API_URL,
};

export default config;
