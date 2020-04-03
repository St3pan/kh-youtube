import routes from "../routes"
import Video from "../models/Video"

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 })
    res.render("home", { pageTitle: "Home", videos })
  } catch (e) {
    console.log(e)
    res.render("home", { pageTitle: "Home", videos: [] })
  }
}
export const search = async (req, res) => {
  const {
    query: { term: searchingFor }
  } = req
  let videos = []
  try {
    videos = await Video.find({
      title: { $regex: searchingFor, $options: "i" }
    })
  } catch (e) {
    console.log(e)
  }
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

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id)
    res.render("videoDetail", { pageTitle: video.title, video })
  } catch (e) {
    res.redirect(routes.home)
  }
}
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id)
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video })
  } catch (e) {
    res.redirect(routes.home)
  }
}

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description })
    res.redirect(routes.videoDetail(id))
  } catch (e) {
    res.redirect(routes.home)
  }
}
export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    await Video.findOneAndRemove({ _id: id })
  } catch (e) {
    console.log(e)
  }
  res.redirect(routes.home)
}
