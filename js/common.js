const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
  searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
});

// 년수계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();