let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML === '='){
            string = eval(string).toFixed(4);
            document.querySelector('.input-design').value = string;
        }
        else if(e.target.innerHTML === 'C'){
            string = "";
            document.querySelector('.input-design').value = string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string= string.slice(0,-1);
            document.querySelector('.input-design').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.input-design').value = string; 
        }
        
    })
})