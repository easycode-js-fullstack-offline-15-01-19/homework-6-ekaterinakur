// -------------------------- Home work 6 --------------------------
// -------------------------- Курочка Екатерина --------------------------

//   Slide 14   ----------------------------------------------------
// 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let btnMsg = document.getElementById('btn-msg');

btnMsg.addEventListener('click', function () { alert(btnMsg.dataset.text); });

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
btnMsg.addEventListener('mouseover', function() { btnMsg.style.background = 'red'; });
btnMsg.addEventListener('mouseleave', function() { btnMsg.style.background = ''; });

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
document.body.addEventListener('click', function(e) { document.getElementById('tag').textContent = 'Tag: ' +  e.target.tagName; });

// или (но добавляет к предыдущему результату)
// let idTag = document.getElementById('tag');
// document.body.addEventListener('click', function(e) { idTag.textContent +=  e.target.tagName; });


// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д.
let btnGenerate = document.getElementById('btn-generate');
let ulList = document.querySelector('ul');

btnGenerate.addEventListener('click', function() { 
  let newLi = document.createElement('li');
  newLi.textContent = 'Item ' + (ulList.children.length + 1);
  ulList.appendChild(newLi);  
});

//   Slide 15   ----------------------------------------------------
//  6. Реализовать примитивный дропдаун. 
let ddiLi = document.getElementsByClassName('dropdown-item');
let ddmDiv = document.getElementsByClassName('dropdown-menu');

//  Без доп. аттрибутов не знаю как сделать
for (let i = 0; i < ddiLi.length; i++) {
	ddiLi[i].setAttribute('id', 'clicked' + i);
}

let firstClicked = document.getElementById('clicked0');
let secondClicked = document.getElementById('clicked1');

for (let i = 0; i < ddmDiv.length; i++) {
	ddmDiv[i].setAttribute('id', 'openable' + i);
}

let firstOpenable = document.getElementById('openable0');
let secondOpenable = document.getElementById('openable1');

firstClicked.addEventListener('click', function() {
	firstOpenable.classList.toggle('d-none');
	secondOpenable.classList.add('d-none');
});

secondClicked.addEventListener('click', function() {
	secondOpenable.classList.toggle('d-none');
	firstOpenable.classList.add('d-none');
});