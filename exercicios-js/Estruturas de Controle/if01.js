function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeImprimir(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeImprimir()
seForVerdadeImprimir(null)
seForVerdadeImprimir(undefined)
seForVerdadeImprimir(NaN)
seForVerdadeImprimir('')
seForVerdadeImprimir(0)
seForVerdadeImprimir(-1)
seForVerdadeImprimir(' ')
seForVerdadeImprimir('?')
seForVerdadeImprimir([])
seForVerdadeImprimir([1, 2])
seForVerdadeImprimir({})