import './style.scss';
const Papa = require('papaparse');

let lastGen ="";

const toCSVButton = document.getElementById("toCSV") as HTMLButtonElement;
toCSVButton.addEventListener("click", (event) => {

  const inputArea: HTMLTextAreaElement = document.getElementById("json") as HTMLTextAreaElement;
  const inputData = JSON.parse(inputArea.value);
  
  const output = Papa.unparse(inputData);
  (document.getElementById("csv") as HTMLTextAreaElement).value = output;
  
  lastGen="CSV";
});

const toJSONButton = document.getElementById("toJSON") as HTMLButtonElement;
toJSONButton.addEventListener("click", (event) => {

  const inputArea: HTMLTextAreaElement = document.getElementById("csv") as HTMLTextAreaElement;
  const inputData = inputArea.value;
  
  const output = Papa.parse(inputData, {header: true});
  (document.getElementById("json") as HTMLTextAreaElement).value = JSON.stringify(output.data);
  
  lastGen="JSON";
});


const copyContent = (data: string)=>{
  if (data){
    navigator.clipboard.writeText(data)
      .then(()=>alert("Copied!"))
      .catch((error) => alert("Error: "+error));
  }
}

const csvElement = document.getElementById("csv") as HTMLTextAreaElement;
csvElement.addEventListener("click", (event) => {
  if (lastGen == "CSV")
    copyContent(csvElement.value);
});

const jsonElement = document.getElementById("json") as HTMLTextAreaElement;
jsonElement.addEventListener("click", (event) => {
  if (lastGen == "JSON")
    copyContent(jsonElement.value);
});

const resetButton = document.getElementById("reset") as HTMLButtonElement;
resetButton.addEventListener("click", (event) => {
  (document.getElementById("json") as HTMLTextAreaElement).value = "";
  (document.getElementById("csv") as HTMLTextAreaElement).value = "";
});