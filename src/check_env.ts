const node_env: any = process.env.NODE_ENV

export const check_env = node_env && node_env === "production" ? "https://app-of-the-heck.herokuapp.com" : 'http://localhost:4000'