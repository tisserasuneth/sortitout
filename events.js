function input(){
  document.getElementById("fileUpload").click();
}

function dropHandler(event) {
    event.preventDefault();
}

function dragOverHandler(event){
  console.log("dragged")
  event.preventDefault();
}




function checkFile(){
  const [file] = document.getElementById('fileUpload').files;
  if(file.type != "text/plain"){
    document.getElementById('wrongFileTypeAlert').hidden=false;
  }
  else{
    document.getElementById('wrongFileTypeAlert').hidden=true;
  }
}

function doFile() {
    const content = document.getElementById('content');
    const [file] = document.getElementById('fileUpload').files;
    const reader = new FileReader();
  
    if(!file){
        document.getElementById("noFileAlert").hidden=false;
    }

    if (file && file.type == "text/plain") {
      document.getElementById('noFileAlert').hidden = true;

      document.getElementById("listUploaded").removeAttribute("hidden")
      reader.readAsText(file);
    }

    reader.addEventListener("load", () => {
        const readyToSort = []
        const splitString = reader.result.trim().split('\n')

        splitString.forEach(e => {
             readyToSort.push(parseInt((e)))
        });
       
        const sorted = quicksort((readyToSort))
        console.log(sorted)
      }, false);
}

function refresh(){
  location.reload();
}
