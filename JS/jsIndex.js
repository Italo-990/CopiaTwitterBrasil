const accountPublicInf = document.querySelectorAll('.accountPublicInf')
const svgInput = document.querySelector('.svgInput')
const inputSearch = document.querySelector('.inputSearch')
const spanInputSearch = document.querySelector('.spanInputSearch')
accountPublicInf[0].classList.add('linkActive');
for(let i = 0; i < accountPublicInf.length; i++){
    if(accountPublicInf[i].href == window.location.href){
        if(accountPublicInf[0].classList.contains('linkActive'){
               accountPublicInf[0].classList.remove('linkActive')
           }
        accountPublicInf[i].classList.add('linkActive')
    }

}
inputSearch.addEventListener('focus',function(){
    svgInput.classList.add('inputFocusSvg')
    inputSearch.classList.add('inputFocus')
    spanInputSearch.classList.add('inputFocusSpan')
})
inputSearch.addEventListener('focusout',function(){
    svgInput.classList.remove('inputFocusSvg')
    inputSearch.classList.remove('inputFocus')
    spanInputSearch.classList.remove('inputFocusSpan')
})

