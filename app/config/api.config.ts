// export const API_URL = `https://red-project-bank-app.herokuapp.com/api`
export const API_URL = 'https://red-project-bank-app.herokuapp.com/api'
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
