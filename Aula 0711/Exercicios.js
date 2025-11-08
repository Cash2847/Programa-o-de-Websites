// && = and || = or ! = not

// Crie uma função que trá nome e idad. A saída deverá ter:
// "Nome: Fulano - Idade: 30"

function nomeIdade() {

    let nome = prompt('Digite seu nome: ')
    let idade = parseInt(prompt('Digite sua idade: '))

    alert(`Nome: ${nome} - Idade: ${idade}`)

}

nomeIdade()

// Faça um fatorial de um número.
// Exemplo: 4 -> 4 * 3 * 2 * 1


// function fatorialRecursivo(n) {
//   if (n < 0) {
//     return "Não é possível realizar fatorial.";
//   }
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * fatorialRecursivo(n - 1);
// }

// console.log(fatorialRecursivo(5));

function fatorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * fatorial(x -1)
    }
}

fatorial(4)

let olaNome = () => {
    alert('Olá mundo!')
}

olaNome()



const titulo = document.getElementById

titulo.style.borderRadius = '10px'
'10px'

titulo.style.padding = '10px'
'10px'

titulo.style.borderRadius = '3px'
'3px'

titulo.style.borderRadius = 'radial'
'radial'

titulo.style.borderRadius = '10px'
'10px'

titulo.textContent = 'O Escritório (Brasil)';
'O Escritório (Brasil)'

titulo.addEventListener('click', () => {
    alert('Em breve no SBT');
});

titulo.onmouseup = 'blue' 
'blue'
titulo.addEventListener('mouseout', () =>  {})


titulo.addEventListener('mouseout', () =>  {
    titulo.style.color = 'blue'
    titulo.style.backgroundColor = 'yellow'
});

titulo.addEventListener('mouseout', () =>  {
    titulo.style.color = 'blue'
    titulo.style.backgroundColor = 'yellow'
});
undefined
titulo.addEventListener('mouseover', () =>  {
    titulo.style.color = 'red'
    titulo.style.backgroundColor = 'green'
});
undefined
titulo.addEventListener('mouseover', () =>  {
    titulo.style.color = 'red'
    titulo.style.backgroundColor = 'blue'
});
undefined
titulo.addEventListener('mouseover', () =>  {
    titulo.style.color = 'green'
    titulo.style.backgroundColor = 'blue'
});
undefined
titulo.addEventListener('mouseover', () =>  {
    titulo.style.color = 'white'
    titulo.style.backgroundColor = 'blue'
});


const paragrafos = document.querySelectorAll('p')

paragrafos.forEach(p => {
    p.style.color = 'green';
})