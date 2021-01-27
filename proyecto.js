function randomExcuse(){
    let quien = ['el perro', 'mi abuela', 'su tortuga', 'mi pajarito'];
    let que = ['se comio', 'ensucio', 'arruino', 'rompio'];
    let cuando = ['antes de clase', 'justo en clase', 'cuando finalice', 'durante mi almuerzo', 'miestras rezaba'];

    let randomNumber1 = Math.floor(Math.random() * 4)
    let randomNumber2 = Math.floor(Math.random() * 4)
    let randomNumber3 = Math.floor(Math.random() * 4)

    let texto = `${quien[randomNumber1]} ${que[randomNumber2]} la tarea ${cuando[randomNumber3]}`
    let parrafo = document.querySelector("#excuse")
    parrafo.innerHTML = texto
};
randomExcuse()
