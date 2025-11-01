cont = 1
while (true) {
    
    console.log(cont);cont ++;
    if (cont === 10) {
        break;
    }
}


while (true){
    let senha = prompt('Digite sua senha: ')
        if (senha === 'admin123')
    {
        console.log('A senha está correta!')
        break
    }
    else {
        console.log('Senha incorreta!')
    }
}


let senha = prompt('Digite sua senha: ')
while (senha !== 'admin123') {
    senha = prompt('Digite sua senha: ')
}
alert('Senha correta!')

function olaMundo(){
    alert('Olá, mundo!');
    alert('Olá, pessoal!');
};

olaMundo();

nota1 = parseInt(prompt('Insira a nota da P1: '))
nota2 = parseInt(prompt('Insira a nota da P2: '))
function mediaNota(nota1, nota2) {
    let media = ((nota1 + nota2)/ 2)
    if (media >= 7) {
        alert('Aprovado!')}
    else {
        alert('Reprovado!')
        }
    };
mediaNota(nota1, nota2);

function mediaNotas(p1, p2) {
    let media = (p1 + p2)/2;
    if (media >= 7) {
        return alert(`O aluno tirou ${media} e está aprovado.`)
    }
    else {
        return alert(`O aluno tirou ${media} e está reprovado.`)
    }
}
mediaNotas(10, 8)