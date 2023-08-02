let addButton = document.querySelector('.add-btn');
let inputItem = document.querySelector('.input-tag');
let lists = document.querySelector('.list');

addButton.addEventListener('click',function(){
  let para = document.createElement('p');
  let btn = document.createElement('span');
  para.innerText = inputItem.value;
  para.appendChild(btn);
  lists.appendChild(para);
  inputItem.value = '';
  btn.innerText ='X';
  
  btn.addEventListener('click', function(){
    lists.removeChild(para);
  })
})