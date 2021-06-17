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

const buttonPlace = (local) => {
    const reveal = document.querySelector(local);
    const main = document.querySelector('main');
    reveal.style.display = 'flex';
    main.style.display = 'none'
}