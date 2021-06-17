const buttonYes = () => {
    const header = document.querySelector('.header');
    const main = document.querySelector('main')
    header.style.display = 'none';
    main.style.display = 'flex'
}

const buttonNo = () => {
    if(confirm("Tem certeza que não quer sair comigo?")){
        alert ("Ok, bye")
        window.close()
    }
}

const buttonMall = () => {
    const header = document.querySelector('.shopping');
    const main = document.querySelector('main')
    header.style.display = 'flex';
    main.style.display = 'none'
}

const buttonBeach = () => {
    const header = document.querySelector('.praia');
    const main = document.querySelector('main')
    header.style.display = 'flex';
    main.style.display = 'none'
}

const buttonBar = () => {
    const header = document.querySelector('.bar');
    const main = document.querySelector('main')
    header.style.display = 'flex';
    main.style.display = 'none'
}