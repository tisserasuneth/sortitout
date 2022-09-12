var droppedFile;
let listInfo = new Array(0);

function input(){
  document.getElementById("fileUpload").click();
}

function dropHandler(event) {
    event.preventDefault();
    droppedFile = event.dataTransfer.files[0];
    checkDropped(droppedFile);
}

function dragOverHandler(event){
  console.log("dragged");
  event.preventDefault();
}

function checkFile(){
  [file] = document.getElementById('fileUpload').files;
  if(file.type != "text/plain"){
    document.getElementById('wrongFileTypeAlert').hidden=false;
  }
  else{
    document.getElementById('wrongFileTypeAlert').hidden=true;
    document.getElementById('dropText').hidden=true;
    document.getElementById('uploadedFile').hidden=false;
    document.getElementById('fileName').innerHTML = file.name;
  }
}

function checkDropped(file){
  if(file.type != "text/plain"){
    document.getElementById('wrongFileTypeAlert').hidden=false;
  }
  else{
    document.getElementById('wrongFileTypeAlert').hidden=true;
    document.getElementById('dropText').hidden=true;
    document.getElementById('uploadedFile').hidden=false;
    document.getElementById('fileName').innerHTML = droppedFile.name;
  }
}

function doFile() {
    document.getElementById('loading').hidden = false;

    [file] = document.getElementById('fileUpload').files;
    if(droppedFile){
      readIt(droppedFile);
    }
    else{
      readIt(file);
    }
}

function readIt(file){
  const reader = new FileReader();
    if(!file){
        document.getElementById("noFileAlert").hidden=false;
    }

    if (file && file.type == "text/plain") {
      document.getElementById('noFileAlert').hidden = true;
      reader.readAsText(file);
    }

    reader.addEventListener("load", () => {
        const readyToSort = [];
        let cleanedString = reader.result.replace(/\D/g,' ');
        cleanedString = cleanedString.replace(/\n/g, ' ');
        const splitString = cleanedString.trim().split(' ');
    
        splitString.forEach(e => {
              if(e === ""){
                console.log("e" + e)
                return;
              }
              else{
                readyToSort.push(parseInt((e)))
              }
        });
       
        const sorted = quicksort((readyToSort));
        writeFile(Object.values(sorted),file.name);
      }, false);
}

function writeFile(sortedList,fileName){
  var blob = new Blob([sortedList], {
  type: "text/plain;charset=utf-8"
});
  listInfo.push(fileName);
  listInfo.push(blob);
  loader();
  move();
}

function download(){
  SaveAsFile(listInfo.pop(), listInfo.pop(), "text/plain;charset=utf-8");
  refresh()
}

function SaveAsFile(t,f,m) {
  try {
      var b = new Blob([t],{type:m});
      saveAs(b, f);
  } catch (e) {
      window.open("data:"+m+"," + encodeURIComponent(t), '_blank','');
  }
}

function loader(){
  const loading = document.getElementById('loading');
  loading.hidden = false;

  setTimeout(() => {
    loading.hidden = true;
    document.getElementById('sortButtons').hidden = true;
    document.getElementById('downloadButton').hidden = false;
    document.getElementById('downloadIt').hidden = false;
  }, 3000); 
  
}

function refresh(){
  location.reload();
}
