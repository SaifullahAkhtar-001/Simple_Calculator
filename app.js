let String = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML === '='){
            try{
                String = eval(String);
                if (Number.isInteger(String) === false) {
                    String = eval(String).toFixed(4);
                    document.querySelector('.input-design').value = String;
                }
                else{
                    document.querySelector('.input-design').value = String; 
                } 
            }
            catch(err){
                console.log(err);
            }
        }
        else if(e.target.innerHTML === 'C'){
            String = "";
            document.querySelector('.input-design').value = String;
        }
        else if(e.target.innerHTML === 'DEL'){
            String= String.slice(0,-1);
            document.querySelector('.input-design').value = String;
        }
        else{
            console.log(e.target)
            String = String + e.target.innerHTML;
            document.querySelector('.input-design').value = String; 
        }
        
    })
})