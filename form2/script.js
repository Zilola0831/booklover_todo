let body=document.querySelector(".body");
let son=null;``
// let k=null
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,
    set, ref, get, child, update, remove} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
let gets1=document.querySelector("#gets1")
const firebaseConfig = {
  apiKey: "AIzaSyBruhUDwpFVknbwb0RaWwQ7trgHu9Ymd_I",
  authDomain: "user-info-a5c31.firebaseapp.com",
  projectId: "user-info-a5c31",
  storageBucket: "user-info-a5c31.appspot.com",
  messagingSenderId: "528031737053",
  appId: "1:528031737053:web:a0a641ba1cd5b9823fa734",
  measurementId: "G-Y9CRCJ4S0B"
};
let ism=prompt("ismingizni kiriting")


const app = initializeApp(firebaseConfig);

let k=1;
let arr=[];
const db=getDatabase();
get(ref(db , `todo/${ism}/`)).then((el)=>{
    if(el.exists()){
        k=el.val().length;
        
        for (let i = 0; i < k; i++) {
            if(el.val()[i]!=undefined){
            arr.push(el.val()[i]);
            console.log(arr); 
            }  
        } 

        General(arr)
            
    }
})
function General(arr1){
    body.innerHTML=""; 
    for (let j = 0; j < arr1.length; j++) {
        let qator=document.createElement("div");
        let editDel=document.createElement("div");
        let edit=document.createElement("button");
        let del=document.createElement("button");
        let h2=document.createElement("h2");
        console.log(arr1[j]);
        if(arr1[j]!=undefined){
            console.log(arr1[j].username);
            h2.textContent=arr1[j].username;
            h2.style.textDecoration="none"
            h2.style.cursor="pointer"
            body.appendChild(qator);
            qator.appendChild(h2);
            qator.style.display="flex"
            qator.style.justifyContent="space-between"
            qator.appendChild(editDel);
            editDel.appendChild(edit);
            editDel.appendChild(del)
            qator.style.display="flex"
            qator.style.alignItems="center"
            qator.style.borderBottom="2px solid blue"

            del.textContent="delete";
            edit.textContent="edit"
            edit.style.background="green"
            del.addEventListener("click", ()=>{            
                remove(ref(db, `todo/${ism}/` + arr1[j].todoId), { 
                 })
                 qator.innerHTML=""
                 arr.splice(j, j+1);
                 console.log(arr);
            })

            h2.style.textDecoration=`${arr1[j].completed? "":"line-through"}`
        h2.addEventListener("click", ()=>{
            arr1[j].completed=!arr1[j].completed
            h2.style.textDecoration=`${arr1[j].completed? "":"line-through"}`
            
            update(ref(db, `todo/${ism}/` + arr1[j].todoId), {
               completed:arr1[j].completed,
            })
                        
        }) 
        edit.addEventListener("click", ()=>{
            send.style.display="none"
            edit1.style.display="block"
            son=j;
              username.value=arr[j].username;
        })
    }
        
    } 
}

edit1.addEventListener("click", ()=>{
    edit1.style.display="none"
    send.style.display="block"
    console.log(son);
    update(ref(db, `todo/${ism}/` + arr[son].todoId), {
        username:username.value,
     })
})
function setData(){
 let ob={
    username: username.value,
    completed: completed.checked,
    todoId:k
   }
 set(ref(db, `todo/${ism}/`+k),ob).then(()=>{
        alert("yuborildi")
    }).catch(()=>{
        alert(error)
    })
    console.log(k);
    k++;
    arr.push(ob);
    console.log(arr);
   General(arr)
    
          
}

  send.addEventListener("click", (event)=>{
    event.preventDefault();
    setData();
    
  })
  console.log(arr);
 
// olish.addEventListener("click", (e)=>{
//     e.preventDefault();
//     get(ref(db , "todo/")).then((el)=>{
//         if(el.exists()){
//             console.log(el.val());
//         }
//     })
// })

    

