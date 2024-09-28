// local storage session storage

// session storage value store when you stay on the website ,,if you go to another tab or close the window then session storage remove

// local storage  ai browser ta jotodin on korben tottodin thakbe
//we saw session and local storage in browser Application
const storageInput =()=>{
    let idInputField = document.getElementById('idInput');
    let id = idInputField.value;
    let valueInputField = document.getElementById('valueInput');
    let value = valueInputField.value;
//    jodi id and value duita ii thanke tahole kaj korbe
    if(id && value) {
        localStorage.setItem(id,value);
    }

    idInputField.value = '';
    valueInputField.value = '';




}



// localstorage a value ta text akare ba single value hisabe rakha jai array ba obj rakhar jonno JSON.stringify use korte history...r get korar somoi JSON.parse use korte hoi 
localStorage.setItem('friends',JSON.stringify([34,43,4,5]));
localStorage.getItem(JSON.parse('friends'));


