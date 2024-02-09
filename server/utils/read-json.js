import {readFileSync} from 'fs'

export const readJSON = (path) => {
  const jsonData = readFileSync(path, 'utf-8')
  return JSON.parse(jsonData)
}