var lista = []
var numeroDeImagens = 8
var ii = 1
var i = numeroDeImagens - 1
var gs = [5800, 0, 500, 4800, 5800, 0, 6500, 0]


for (numeroDeImagens; numeroDeImagens >= 1; numeroDeImagens--) {
    lista.push(`<div class='card'>
                <div class='product-image  ' id='img-${ii}'></div>
                <h3>Char ${ii}</h3>
                <p>Este char é muito forte...</p>
                <p>GS <span class='bold'>${gs[(ii-1)]}</span>
                </p>
                <a href='#' class='btn'>Vizualizar</a>
            </div>`)
    ii++
}

for (i; i > 0; i--) {
    mostrar()
}




function mostrar() {
    $('.chars-container').after(lista[i])
}


console.log(lista.leng)