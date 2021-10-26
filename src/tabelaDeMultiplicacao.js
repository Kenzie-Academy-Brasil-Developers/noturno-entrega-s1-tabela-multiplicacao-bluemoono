function tabelaMultiplicacao(n) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    if(n === undefined){
        let x = [];
        for (let i = 0; i <= 10; i++) {
            x[i] = [];
            for(let j=0; j<= 10; j++){
                let mult = i*j
                x[i].push(mult)
            }
        }
        console.table(x)
    } else {
        let x = [];
        for (let i = 0; i <= n; i++) {
            x[i] = [];
            for(let j=0; j<= n; j++){
                let mult = i*j
                x[i].push(mult)
            }
        }
        console.table(x)
    }
}

tabelaMultiplicacao(11)