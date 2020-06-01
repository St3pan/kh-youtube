import express from "express"
import routes from "./../routes"
import {
  getVideoUpload,
  postVideoUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController"
import { uploadVideo } from "../middlewares"
import { onlyPrivate } from "./../middlewares"

const videoRouter = express.Router()

videoRouter.get(routes.videoUpload, onlyPrivate, getVideoUpload)
videoRouter.post(routes.videoUpload, onlyPrivate, uploadVideo, postVideoUpload)

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo)
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo)

videoRouter.get(routes.videoDetail(), videoDetail)
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo)

export default videoRouter
