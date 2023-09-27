import './style.scss';
const Papa = require('papaparse');

let lastGen ="";

let toCSVButton = document.getElementById("toCSV") as HTMLButtonElement;
toCSVButton.addEventListener("click", (event) => {

  let inputArea: HTMLTextAreaElement = document.getElementById("json") as HTMLTextAreaElement;
  let inputData = JSON.parse(inputArea.value);
  
  let output = Papa.unparse(inputData);
  (document.getElementById("csv") as HTMLTextAreaElement).value = output;
  
  lastGen="CSV";
});

let toJSONButton = document.getElementById("toJSON") as HTMLButtonElement;
toJSONButton.addEventListener("click", (event) => {

  let inputArea: HTMLTextAreaElement = document.getElementById("csv") as HTMLTextAreaElement;
  let inputData = inputArea.value;
  
  let output = Papa.parse(inputData, {header: true});
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

let csvElement = document.getElementById("csv") as HTMLTextAreaElement;
csvElement.addEventListener("click", (event) => {
  if (lastGen == "CSV")
    copyContent(csvElement.value);
});

let jsonElement = document.getElementById("json") as HTMLTextAreaElement;
jsonElement.addEventListener("click", (event) => {
  if (lastGen == "JSON")
    copyContent(jsonElement.value);
});

let resetButton = document.getElementById("reset") as HTMLButtonElement;
resetButton.addEventListener("click", (event) => {
  (document.getElementById("json") as HTMLTextAreaElement).value = "";
  (document.getElementById("csv") as HTMLTextAreaElement).value = "";
});