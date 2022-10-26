var fnInput = document.querySelector("#fName");
var lnInput = document.querySelector("#lName");
var btn = document.querySelector("#submit-btn");
var infoArea = document.querySelector("#names");
var cleanBtn = document.querySelector("#clean-btn");
var info = [];

btn.addEventListener("click", function(e){

    e.preventDefault();
    
    info.push({fName: fnInput.value, lName: lnInput.value});

    // console.log(info)

    for(var i = 0; i < info.length; i++){
        localStorage.setItem(i, JSON.stringify(info[i]))
    }
        display(fnInput.value, lnInput.value);

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
        if(info !== " ") {
            localStorage.clear()
            infobox.innerHTML = "";
        }
    })


getItems();

