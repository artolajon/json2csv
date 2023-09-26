import './style.scss';
import { json2csv } from 'json-2-csv';

let transformButton = document.getElementById("transform");
transformButton.addEventListener("click", (event) => {

  let inputArea: HTMLTextAreaElement = document.getElementById("input") as HTMLTextAreaElement;
  let inputData = JSON.parse(inputArea.value);
  
  json2csv(inputData, {}).then(output =>{
    (document.getElementById("output") as HTMLTextAreaElement).value = output;
  });
  
});