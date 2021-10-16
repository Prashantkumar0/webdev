let fs = require("fs");
let extensionMapping = require("./util.js");
// console.log(extensionMapping);
let testFolderPath = "./downloads";

let allFiles=fs.readdirSync(testFolderPath); 
// console.log(allFiles);

for(let i=0;i<allFiles.length;i++){
sortFile(allFiles[i]);
}

// get extension

function getExtension(file){
    file=file.split(".");
    return file[1];
}


function CheckExtensionFolder(extension){
    let extensionFolderName=testFolderPath;
    for(let key in extensionMapping){
        let extensions = extensionMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName=extensionFolderName+"/"+key;
            break;
        }
    }
    // extensionFolderName="document"
    // "./downloads"
    
    // let folderToBeChecked=testFolderPath+"/"+extensionFolderName;
    // "./downloads/documents"
    // wheather it exist or not already
    let isFolderExist=fs.existsSync(extensionFolderName);
    if(!isFolderExist){
        fs.mkdirSync(extensionFolderName);
    }
    return extensionFolderName;
    // return fs.existsSync(folderToBeChecked);
    // ture/ false whetaer folder exist or not
   }
function moveFile(file , extensionFolderName){
    let sourceFile = testFolderPath+"/"+file;
    let destinationFile = extensionFolderName+"/"+file;
    // copy file from the source path to destination path !!
    fs.copyFileSync(sourceFile , destinationFile);
    // then delete file from the source path !!
    fs.unlinkSync(sourceFile);
 }
function sortFile(file){
    let extension=getExtension(file);
    // console.log(extension);
    // CheckExtensionFolder(extension);
    let extensionFolderName=CheckExtensionFolder(extension);
    moveFile(file , extensionFolderName);
    } 
    
  