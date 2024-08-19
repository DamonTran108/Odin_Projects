const unordered_list =  document.querySelector("ul");


const input = document.querySelector("input");


const btn = document.querySelector("button");




   


    btn.addEventListener("click", function (e) {

        buttonClick();

        input.value = "";

      

      });


    

      function buttonClick(){

        let value = input.value;

       
        const newListItem = document.createElement('li');

        const newListItemThing = document.createElement('span');

        const newListItemBtn = document.createElement('button');


        
        newListItem.appendChild(newListItemThing);
        newListItem.appendChild(newListItemBtn);



        newListItemThing.textContent = value;

        newListItemBtn.textContent = "Delete";


        unordered_list.appendChild(newListItem);


     
            
        newListItemBtn.addEventListener("click", function (e) {


               
        
            newListItem.replaceChildren();

            unordered_list.removeChild(newListItem);
            

        

        });


        input.focus() 
        
        console.log(value);
        }





  


        