function SomaTudo(...args){
    const soma = args.reduce((acumulador , valor) => {
        return acumulador + valor
    }, 0)
    const media = soma / args.length
    return media
}

console.log(SomaTudo(10 , 9 , 6 , 8 , 9 , 1 , 5 , 7))