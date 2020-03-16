import { videos } from "../db"
import routes from "../routes"

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos })
}
export const search = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req
  res.render("search", { pageTitle: "Search", searchingFor, videos })
}

export const getVideoUpload = (req, res) =>
  res.render("videoUpload", { pageTitle: "Upload video" })

export const postVideoUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req
  //Save video to DB
  res.redirect(routes.videoDetail(342))
}

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" })
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" })
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" })
