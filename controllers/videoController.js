import routes from "../routes"
import Video from "../models/Video"

export const home = async (req, res) => {
  try {
    const videos = await Video.find({})
    res.render("home", { pageTitle: "Home", videos })
  } catch (e) {
    console.log(e)
    res.render("home", { pageTitle: "Home", videos: [] })
  }
}
export const search = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req
  res.render("search", { pageTitle: "Search", searchingFor, videos })
}

export const getVideoUpload = (req, res) =>
  res.render("videoUpload", { pageTitle: "Upload video" })

export const postVideoUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  })
  res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" })
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" })
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" })
