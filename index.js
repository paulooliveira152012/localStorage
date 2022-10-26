var fnInput = document.querySelector("#fName");
var lnInput = document.querySelector("#lName");
var btn = document.querySelector("#submit-btn");
var infoArea = document.querySelector("#names");
var cleanBtn = document.querySelector("#clean-btn");
var title = document.querySelector("#title")
var info = [];

if(!localStorage.length) {
    cleanBtn.style.display="none"
    title.style.display= "none"
}

btn.addEventListener("click", function(e){
    e.preventDefault();

    if(!fnInput.value || !lnInput.value) {
        window.alert("can't leave any blank fields")
    } else {
        info.push({fName: fnInput.value, lName: lnInput.value});
    
        // console.log(info)
    
        for(var i = 0; i < info.length; i++){
            localStorage.setItem(i, JSON.stringify(info[i]))
        }
            display(fnInput.value, lnInput.value);
    
            fnInput.value = '';
            lnInput.value = '';
    
            cleanBtn.style.display="block"
            title.style.display= "block"
    }
})

function getItems(){
    for(var i = 0; i < localStorage.length; i++) {
        if(localStorage.length > 0){
            var index = localStorage.key(i);
            var value = JSON.parse(localStorage.getItem(index));
    
            info.push(value);
            //what to use as arguments for display and why?
            display(value.fName, value.lName)
        }
        console.log(value)
    }
}

//making this variable global to be used on display() and clearBtn
var infobox = document.createElement('div');

function display(fname, lname) {
    
    // var infobox = document.createElement('div');
    
    var displayFName = document.createElement('h3');
    displayFName.textContent = fname;

    var displayLName = document.createElement('h3');
    displayLName.textContent = lname;

    var fullName = document.createElement('p');
    fullName.style.marginBottom = 0;
    fullName.innerHTML = fname + ' ' + lname;

    console.log(fullName)

    infobox.appendChild(fullName);

    infoArea.appendChild(infobox);

}

    cleanBtn.addEventListener("click", function() {
        cleanBtn.style.display="none"
        if(info !== " ") {
            localStorage.clear()
            infobox.innerHTML = "";
        }
        title.style.display= "none"
    });

    // if(info == "") {
    //     cleanBtn.style.display="none"
    // } else {
    //     cleanBtn.style.display="block"
    // }

    // if(infobox == ""){
    //     console.log("empty")
    // } else {
    //     console.log("not empty")
    // }

    function render() {
        
    }

    
    // if(!localStorage.length) {
    //     cleanBtn.style.display="none"
    // }


getItems();

