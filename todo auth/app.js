import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRd-x8jwjd5jozvstds_0RfF5PinvVY3s",
  authDomain: "todo-app-b8c2a.firebaseapp.com",
  projectId: "todo-app-b8c2a",
  storageBucket: "todo-app-b8c2a.appspot.com",
  messagingSenderId: "869046829686",
  appId: "1:869046829686:web:594cfe1ad89494858b5557",
  measurementId: "G-2KS2VMJ7FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

console.log(app)

var list = document.getElementById('list')
var todo_item = document.getElementById('todo_item')
var parent= document.getElementById('parent')

var list = []
var editId ;

window. addTodo = function (){
  var obj;
  if(editId){
    obj= {
      task:todo_item.value,
      updataTime:JSON.stringify(new Date()),
      
    };
  }else{
    obj = {
      task: todo_item.value,
      dataTime: JSON.stringify(new Date()),
    }
  }
  
  const keyRef = ref(database, "todoTasks/")
  obj.id = push(keyRef).key;
  console.log(obj.id)
  
  const taskReference = ref(database, `todoTasks/${obj.id}/`)
  set(taskReference, obj)
  console.log(obj)
  renderData()
  
}
window.renderData= function (){
  parent.innerHTML=""
  for (var i = 0 ; i < list.lenght ; i++){
    parent.innerHTML += `<li>${list[i].task}<br/><span>${list[i].dataTime}</span>
    <button onclick="delTask{'${list[i].id}'}"class="listBtn" >DELETE</button></li>`;
  }
}

window.getData = function () {
  list = []
  const taskReference = ref(database, "todoTasks/")
  onChildAdded(taskReference, function (data) {
      console.log(data.val())
  })
}  

  
window.delTask = function () {
  const taskReference = ref(database,`todoTasks/${obj.id}`)
  remove(taskReference)
  .then(function(e){
      console.log(e)
      getData();
  })
 .catch(function(er){
  console.log(er)
 });
}  

window.del_all = function (){
  // list.innerHYML.remove()
  list.innerHTML = "" //yeh bhi kr sakhty hain
}