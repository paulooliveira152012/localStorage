var fnInput = document.querySelector("#fName");
var lnInput = document.querySelector("#lName");
var btn = document.querySelector("#submit-btn");
var infoArea = document.querySelector("#names")
var info = [];

btn.addEventListener("click", function(e){
    e.preventDefault();
    
    info.push({fName: fnInput.value, lName: lnInput.value});

    // console.log(info)

    for(var i = 0; i < info.length; i++){
        localStorage.setItem(i, JSON.stringify(info[i]))
    }
        display(fnInput.value, lnInput.value)

        fnInput.value = '';
        lnInput.value = '';
})

function getItems(){
    for(var i = 0; i < localStorage.length; i++) {
        if(localStorage.length > 0){
            var index = localStorage.key(i);
            var value = JSON.parse(localStorage.getItem(index));
    
            info.push(value);
            //what to use as arguments for display and why?
            display(value.fname, value.value)
        }
        console.log(value)
    }
    
}


function display(fname, lname) {
    var infobox = document.createElement('div');

    var displayFName = document.createElement('h3');
    displayFName.textContent = fname;
    infobox.appendChild(displayFName);

    var displayLName = document.createElement('h3');
    displayLName.textContent = lname;
    infobox.appendChild(displayLName)

    infoArea.appendChild(infobox)
    
}

getItems();

