class List{
  constructor(item){
  this.item = item;
  }

}

class UI{
   addlistitem(list){
    let tbody = document.getElementById("userData");
    let row = document.createElement("tr");
    let data = `<td><input type="checkbox" class="check-list bg-light"></td>
     <td class="animate__animated animate__fadeIn">
    ${list.item}  
    <button type="button" class="clear-list float-right border-0 bg-transparent">&times;</button>   
    </td>`;
     
       row.innerHTML = data;
       tbody.appendChild(row);
    
   }
   removelistitem(target){
     target.parentElement.parentElement.remove();
   
   }

   markitem(target){
    
    target.parentElement.parentElement.style.textDecoration="line-through";
     target.parentElement.parentElement.style.color="gray";
     target.parentElement.parentElement.style.backgroundColor="rgba(240, 239, 235,0.4)";
     
   }
   unmarkitem(target){
    
    target.parentElement.parentElement.style.textDecoration="none";
     target.parentElement.parentElement.style.color="black";
     target.parentElement.parentElement.style.backgroundColor="white";
     
   }
   
   validateitem(list){
    if(list.item==""){
      let item = document.getElementById("item");
      item.classList.add("is-invalid");
      item.classList.remove("is-valid");
      return false;
    }else{
      let item = document.getElementById("item");
      item.classList.add("is-valid");
      item.classList.remove("is-invalid");
    }
    return true;
   }

   itemempty(){
     let item = document.getElementById("item");
     item.classList.remove("is-valid");
     item.value ="";
   }

   storage(){
     let todo = ["Groceries for lunch ","Plan friend's birthday","Go for Shopping","Pay Bills"];
     for(let index=0;index<todo.length;index++){
       localStorage.setItem("item",todo[index]);
       let d =new Date();
      let tbody = document.getElementById("userData");
      let row = document.createElement("tr");
      let data = `
      <td><input type="checkbox" class="check-list bg-light"></td> 
      <td class="animate__animated animate__fadeIn">
       ${localStorage.getItem("item")} 
       <button type="button" class="clear-list float-right border-0 bg-transparent">&times;</button>   
     </td>`;
      row.innerHTML = data;
      tbody.appendChild(row);
     }
     
   }
   

}

 