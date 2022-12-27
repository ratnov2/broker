import axios from 'axios'

export const $host = axios.create({
  baseURL: 'https://red-project-bank-app.herokuapp.com/api',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE2NzIxNzAwNzcsImV4cCI6MTY3MjE3MzY3N30.PVgKDr1wimWoyCvycTUuZSQ40o8e8DxBySxN0O9pBQ0'
  }
})