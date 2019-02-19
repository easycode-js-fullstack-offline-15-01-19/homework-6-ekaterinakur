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
let tag = document.getElementById('tag');
document.body.addEventListener('click', function(e) { tag.textContent = 'Tag: ' +  e.target.tagName; });

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
let menu = document.querySelector('.menu');

menu.addEventListener('click', function (e) {
	let item = e.target.closest('li.dropdown-item');

	if (!item) return;

	if (item.querySelector('.dropdown-menu').classList.contains('d-none')) {
		this.querySelectorAll('.dropdown-menu').forEach(function (item) {
			item.classList.add('d-none');
		});
		item.querySelector('.dropdown-menu').classList.toggle('d-none');
	} else {
		item.querySelector('.dropdown-menu').classList.toggle('d-none');
	}
});