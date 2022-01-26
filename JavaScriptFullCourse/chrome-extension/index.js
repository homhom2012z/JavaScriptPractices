//chrome://extensions/
let urlGrabbedLists = [];

const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
const ulEl = document.getElementById('ul-el');

let urlFromLocalStorage = JSON.parse(localStorage.getItem('myGrabbedLists'));

if(urlFromLocalStorage){
    urlGrabbedLists = urlFromLocalStorage;
    render(urlGrabbedLists);
}

function updateLocalStorage(){
    localStorage.setItem("myGrabbedLists", JSON.stringify(urlGrabbedLists));
}

inputBtn.addEventListener('click', function(){
    const url = document.getElementById('input-el');
    urlGrabbedLists.push(url.value);
    
    url.value = null;
    // localStorage.setItem("myGrabbedLists", JSON.stringify(urlGrabbedLists));
    updateLocalStorage();
    render(urlGrabbedLists);
})

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear();
    urlGrabbedLists = [];
    render(urlGrabbedLists);
    document.getElementById('url-lists').style.display = 'none';
})

tabBtn.addEventListener('click', function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        urlGrabbedLists.push(tabs[0].url);
        updateLocalStorage();
        render(urlGrabbedLists);
        
        // var activeTab = tabs[0];
        // var activeTabId = activeTab.id; // or do whatever you need
   
    });
    
    
})

async function render(urls){
    let listItems = "";

    if(urls){
        document.getElementById('url-lists').style.display = 'block';
    }else{
        document.getElementById('url-lists').style.display = 'none';
    }

    for(let i=0; i<urls.length; i++){

        listItems += "<li>"+`<a href=${urls[i]} target="_blank">${urls[i]}</a>`+"</li>";
    }
    
    ulEl.innerHTML = listItems;
}

// ulEl.innerHTML += "<li>"+"<a>"+"https://www.youtube.com/watch?v=jS4aFq5-91M"+"</a>"+"</li>";