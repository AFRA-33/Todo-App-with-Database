
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
//   import { getDatabase,ref,
//     set,
//     push,
//     onChildAdded, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDGUg0dN1HTT_u3tbiP6ZdWL12UbBuFdn8",
    authDomain: "html-form-2073b.firebaseapp.com",
    projectId: "html-form-2073b",
    storageBucket: "html-form-2073b.appspot.com",
    messagingSenderId: "249417490478",
    appId: "1:249417490478:web:acb48c8be945dc8650ffbf",
    measurementId: "G-42M86XL7SF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//   const database = getDatabase();


console.log(firebase)
console.log("huidfhoashdfoia")









var list = document.getElementById('list')


function todoApp(){
    var todo_id = document.getElementById('todo-id')

    //creat li tag with text node
    var li = document.createElement('li')
    var li_text= document.createTextNode(todo_id.value)
    li.appendChild(li_text)

    //creat delete button
    var delbtn = document.createElement('button')
    var deltext = document.createTextNode("  Delete")
    delbtn.appendChild(deltext)
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick" , "delbutton(this)")
    
    // create edit button
    var edit_btn = document.createElement('button')
    var edit_text = document.createTextNode('Edit')
    edit_btn.appendChild(edit_text)
    edit_btn.setAttribute("onclick", "edit_btn(this)")
    
    
    
    list.appendChild(li)
    li.appendChild(delbtn )
    li.appendChild(edit_btn )
    todo_id.value = ""
    console.log(li)
}

function delbutton(e){
e.parentNode.remove()
}

function del_all(){
    list.remove()
    //list.innerHTML = "" yeh bhi kr sakhty hain
}
function edit_btn(e){
    var val = prompt("Enter updated value :" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
    
}