import { serverWeb } from "./serverWeb";

const form = document.querySelector("#form");
const input = document.querySelector("#url");
const content = document.querySelector("#content")

form.addEventListener("submit",async (event) => {
  event.preventDefault();
  content.classList.add("placeholder");

  const videoURL = input.value;
  if(!videoURL.includes("shorts")){
    return content.textContent = "Esse vídeo não parece ser um short";
  };

  const params = videoURL.split("/shorts/")[1];
  const [videoId] = params.split("?si");

  content.textContent = "Transformando o áudio em texto...";

  const transcription = await serverWeb.get("/summary/"+videoId);

  content.textContent = "Realizando o resumo...";

  // content.textContent = transcription.data.result; 

  const summary = await serverWeb.post("/summary", {
    "text": transcription.data.result
  });

  content.textContent = summary.data.result;
  content.classList.remove("placeholder");
})