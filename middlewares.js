import routes from "./routes"

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Stube"
  res.locals.routes = routes
  next()
}
