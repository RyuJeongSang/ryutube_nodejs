const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

function trackFunc(track) {
  track.stop();
}

function stopStreamedVideo(videoElement) {
  const videoSome = videoElement;
  const stream = videoSome.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach(trackFunc);
  videoSome.srcObject = null;
}

function handleVideoData(event) {
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
}

function stopRecording() {
  videoRecorder.stop();
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = "Start Recording";
  stopStreamedVideo(videoPreview);
}

function startRecording() {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
}

async function getVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = "Stop Recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "Cant Record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
}

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}
