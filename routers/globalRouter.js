import express from "express"
import routes from "../routes"
import { home, search } from "../controllers/videoController"
import {
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin
} from "../controllers/userController"

const globalRouter = express.Router()

globalRouter.get(routes.join, getJoin)
globalRouter.post(routes.join, postJoin)

globalRouter.get(routes.login, getLogin)
globalRouter.post(routes.login, postLogin)

globalRouter.get(routes.home, home)
globalRouter.get(routes.logout, logout)
globalRouter.get(routes.search, search)

export default globalRouter
