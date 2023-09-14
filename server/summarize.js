import { pipeline } from "@xenova/transformers";
// import {summaryExample} from "./utils/summary.js"


export const summarize = async (text) => {
  // return summaryExample
  try{
    console.log("Realizando o resumo...")

    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
    );
    
    const output = await generator(text)

    return output[0].summary_text;
  }catch(error){
    console.log("Não foi possível realizar o resumo", error)
    throw new Error(error)
  }
}