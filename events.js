document.getElementById('fileButton').onclick = function(){
    document.getElementById('filePicker').click();
}

document.getElementById('filePicker').onchange = function(){
    const file = document.getElementById('filePicker').files[0].name;
    if(file){
        document.getElementById('fileName').innerHTML = file;
    }
}





