import app from "./app"
import "./db"
import "./models/Video"
import "./models/Comment"

const PORT = 5000

const handleListening = () =>
  console.log(`Listening on http://localhost:${PORT}`)

app.listen(PORT, handleListening)
