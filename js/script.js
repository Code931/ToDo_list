let form = document.getElementById("formdata");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let item = document.getElementById("item").value;
    let list = new List(item);
    let ui = new UI();
    let valid =  ui.validateitem(list);
    if(valid){
        ui.addlistitem(list);
        ui.itemempty();
         
    }
    
});
 
  document.getElementById("userData").addEventListener("click", (e) =>{
        if(e.target.classList.contains("clear-list")){
             let ui = new UI();
             ui.removelistitem(e.target);            
        }
  });

  document.getElementById("userData").addEventListener("click", (e) =>{
      if(e.target.classList.contains("check-list")){
          if(e.target.classList.toggle('checked')){
            let ui = new UI();
            ui.markitem(e.target);
          }else{
            let ui = new UI();
            ui.unmarkitem(e.target);    
          }
         
          
      }
  }, false);
 

  $( document ).ready(function() {
    let ui = new UI();
    ui.storage();
});

