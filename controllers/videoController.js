export const home = (req, res) => res.render("home", { pageTitle: "Home" })
export const search = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req
  res.render("search", { pageTitle: "Search", searchingFor })
}

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" })
export const videoUpload = (req, res) =>
  res.render("videoUpload", { pageTitle: "Upload video" })
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" })
export const editVideo = (req, res) =>
  res.render("editideo", { pageTitle: "Edit Video" })
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" })
