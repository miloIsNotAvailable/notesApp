const node_env: any = process.env.NODE_ENV

export const check_env = node_env && node_env === "production" ? "https://notes-app-three-beta.vercel.app/api/index" : 'http://localhost:4000'