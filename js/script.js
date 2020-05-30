let a = document.querySelectorAll('li > a[href*="://"]'); //Поиск нужных тегов
function getCss(){						//Функция изменяющая свойства у тегов
	a.forEach(function(item){
		item.style.fontWeight = '600';
		item.style.color = 'black';
	});
}
getCss();