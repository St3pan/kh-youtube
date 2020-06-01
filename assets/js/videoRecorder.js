const recorderContainer = document.getElementById("jsRecordContainer")
const recordBtn = document.getElementById("jsRecordButton")
const videoPreview = document.getElementById("jsVideoPreview")

let videoRecorder

const handleVideoData = (event) => {
  const { data: videoFile } = event
  const link = document.createElement("a")
  link.href = URL.createObjectURL(videoFile)
  link.download = "recorded.webm"
  document.body.appendChild(link)
  link.click()
}

const stopRecording = () => {
  videoRecorder.stop()
  recordBtn.removeEventListener("click", stopRecording)
  recordBtn.addEventListener("click", getVideo)
  recordBtn.innerHTML = "Start Recording"
}

const startRecording = (stream) => {
  videoRecorder = new MediaRecorder(stream)
  videoRecorder.start()
  videoRecorder.addEventListener("dataavailable", handleVideoData)
  recordBtn.addEventListener("click", stopRecording)
}

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    })
    videoPreview.srcObject = stream
    videoPreview.muted = true
    videoPreview.play()
    recordBtn.innerHTML = "Stop Recording"
    startRecording(stream)
  } catch (e) {
    recordBtn.innerHTML = "Cant record"
  } finally {
    recordBtn.removeEventListener("click", getVideo)
  }
}

function init() {
  recordBtn.addEventListener("click", getVideo)
}

if (recorderContainer) {
  init()
}
