const node_env: any = process.env.NODE_ENV

export const check_env = node_env && node_env === "PRODUCTION" ? "https://notes-app-three-beta.vercel.app" : 'http://localhost:4000'