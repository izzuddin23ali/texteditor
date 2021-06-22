    //execcmd tool
  
    function execCmd(command){
        document.execCommand(command, false, null);
    }

    function execCmdWithArg(command, arg){
        document.execCommand(command, false, arg);
    }

    //save as txt

    function saveFile(){
        const output=document.getElementById("textArea");

        let data = output.innerHTML;

        const textToBlob = new Blob([data], {type : "text/plain"})

        const sFileName = "saveFile";

        let newFileLink=document.createElement("a");
        newFileLink.download = sFileName;

        if(window.webkitURL != null){
        newFileLink.href = window.webkitURL.createObjectURL(textToBlob);
        } else{
        newFileLink.href = window.webkitURL.createObjectURL(textToBlob);
        newFileLink.style.display = "none";
        document.body.appendChild(newFileLink);
        }

        newFileLink.click();
    }

    //localstorage autosave

    (function(){
        var editorKey = "Scuffed-notepad";
        var editor = document.getElementById("textArea");
        var cache = localStorage.getItem(editorKey);

        if(cache){
        editor.innerHTML = cache;
        }

        function autosave(){
        var newValue = editor.innerHTML;
        if(cache != newValue){
            cache = newValue;
            localStorage.setItem(editorKey, cache);
        }
        }

        editor.addEventListener("input", autosave);
    })();

    //button toggle

    var boldButton = document.getElementById('boldButton');
    var boldButtonColor = boldButton.style.backgroundColor;

    boldButton.addEventListener('click', function(){
        boldButtonColor = boldButton.style.backgroundColor = boldButtonColor === "lightgrey" ? "darkgrey" : "lightgrey";
    })

    var italicButton = document.getElementById('italicButton');
    var italicButtonColor = italicButton.style.backgroundColor;

    italicButton.addEventListener('click', function(){
        italicButtonColor = italicButton.style.backgroundColor = italicButtonColor === "lightgrey" ? "darkgrey" : "lightgrey";
    })

    var underlineButton = document.getElementById('underlineButton');
    var underlineButtonColor = underlineButton.style.backgroundColor;

    underlineButton.addEventListener('click', function(){
        underlineButtonColor = underlineButton.style.backgroundColor = underlineButtonColor === "lightgrey" ? "darkgrey" : "lightgrey";
    })

    var strikeButton = document.getElementById('strikeButton');
    var strikeButtonColor = strikeButton.style.backgroundColor;

    strikeButton.addEventListener('click', function(){
        strikeButtonColor = strikeButton.style.backgroundColor = strikeButtonColor === "lightgrey" ? "darkgrey" : "lightgrey";
    })

    //word count

    var textArea = document.getElementById("textArea");
    var count = document.getElementById("count");

    function wordCount(){

        var word = textArea.innerText.replace(/\n/ig, " ").replaceAll(/\s+/g, " ").trim();

        if (word){
            count.innerText = "Word count: " + word.split(" ").length;
        } else{
            count.innerText = "Word count: " + 0;
        }

    }

    textArea.addEventListener("input", wordCount());
    wordCount();