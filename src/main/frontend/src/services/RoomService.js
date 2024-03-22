import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/voicerooms";

export const listRooms = () => axios.get(REST_API_BASE_URL);

export const createRoom = (voiceroom) =>
  axios.post(REST_API_BASE_URL, voiceroom);

export const getVoiceroom = (voiceroomId) =>
  axios.get(REST_API_BASE_URL + "/" + voiceroomId);
