const colors={
    p:'#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc0sd',
    header: '#d8ab60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrão: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrão
    }
}

document.querySelectorAll('.tag').forEach( elemento =>{
    const tagName = elemento.tagName.toLowerCase()

    //elemento.style.borderColor = '#616161'
    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        //label.style.backgroundColor = '#616161'
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})