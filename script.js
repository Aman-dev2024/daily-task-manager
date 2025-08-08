function clock(){
    const now=new Date();
    const time=now.toLocaleTimeString();
    const hours=now.getHours();

    document.getElementById("clock").textContent=time;

    if(hours>=5 && hours<=12){
        document.getElementById("greet").textContent="Good morning";
        document.body.style.backgroundColor="#fef3c7";
    }
    else if(hours>=12 && hours<=17){
        document.getElementById("greet").textContent="Good afternoon";
        document.body.style.backgroundColor="#d1fae5";
    }
    else if(hours>=17 && hours<=21){
        document.getElementById("greet").textContent="Good evening";
        document.body.style.backgroundColor="#dbeafe";
    }
    else{
        document.getElementById("greet").textContent="Good night";
        document.body.style.backgroundColor="#1e293b";
    }

    setInterval(clock,1000)
}
clock();

const addBtn=document.getElementById("addBtn");
const ul=document.getElementById("taskList");
const taskInput=document.getElementById("taskInput");
addBtn.addEventListener("click",function(){
    const taskText=taskInput.value.trim();
    if(taskText!==""){
        const li=document.createElement("li");
        li.textContent=taskText;

        const checkBtn=document.createElement("button");
        checkBtn.style.marginLeft="480px"
        checkBtn.style.padding = "5px 10px";
        checkBtn.style.border = "none";
        checkBtn.style.borderRadius = "5px";
        checkBtn.style.backgroundColor = "#d4edda"; 
        checkBtn.style.cursor = "pointer";
        checkBtn.innerHTML=`<i class="fa-solid fa-check"></i>`;
        checkBtn.addEventListener("click",function(){
            li.style.textDecoration="line-through";
        })

        const deleteBtn=document.createElement("button");
        deleteBtn.style.marginLeft="10px";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.border = "none";
        deleteBtn.style.borderRadius = "5px";
        deleteBtn.style.backgroundColor = "#f8d7da"; 
        deleteBtn.style.cursor = "pointer";
        deleteBtn.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        deleteBtn.addEventListener("click",function(){
            li.remove();
        })

        li.appendChild(checkBtn)
        li.appendChild(deleteBtn)
        ul.appendChild(li)
        taskInput.value="";
    }
})
async function fetchQuote() {
    try{
        const reponse=await fetch("https://zenquotes.io/api/random");
        const data=await reponse.json();   

        document.getElementById("quote").textContent=data
    }
    catch(error){
        document.getElementById("quote").textContent="Failed to load quote";
        console.log(error)
    }
}
fetchQuote();