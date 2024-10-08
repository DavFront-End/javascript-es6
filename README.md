 # O que é o JS ES6 ?

* Uma versão "nova" de JS que trouxe diversas funcionalidades
* São os conhecimentos base para aprender os frameworks modernos
(React, Vue, Angular)
* E também agilizam muito o desenvolvimento de JS puro;

* Um dos problemas que se encontra em utilizar recursos mais
modernos é a compatibilidade com navegadores mais antigos
nesse caso seria precisso o uso de um compilador que transforma
um código JS moderno em um código mais antigo.
Um exemplo desses compiladores é o Babel.

* Quando se utiliza Frameworks esses recursos já vem junto com
eles por isso eles são cada vez  mais usados para desenvolver
aplicações web.

# Recursos do ES6

# Variáveis com let e const

* Temos duas novas formas de declarar variáveis no ES6;
* A let que é semelhante ao var, podemos alterar valores;
* E a const, que é uma forma de declarar constantes;
* O grande diferencial é o escopo de blocos, não temos mais 
variáveis sendo 'vazadas' para outros escopos por causa do
mesmo nome;

* Bloco - É tudo aquilo que está entre uma abertura e o fechamento de uma chave.

* Funções - A função tem um bloco especial você não pode acessar váriaveis lá de dentro sem que ela te retorne mesmo se for uma var.

# Arrow Functions

* A arrow function é um recurso para criar funções de forma mais simples.
* Mas ela não funciona exatamente como uma function em todos os aspectos;
* O this da arrow function é relacionado ao elemento pai de quem está executando

# Método Filter

* O filter é um método de array para filtar dados, baseado em alguma condição que estabelecemos;
* Isso nos dá um array com apenas os elementos que queremos, de forma perfomática;
* Há vários métodos de array importantes no ES6, este é um deles;
* Ele não modifica o array original.

# Método Map

* O map é um método de array também, que percorre todos os elementos;
* Quando utilizamos Map, estamos querendo modificar os dados do array;
* Há vários métodos de array importantes no ES6, este é um deles;

# Template Literals

* O recurso de template literals permite concatenar uma string de forma mais simples;
* Podemos colocar as variáveis entre o texto;
* A string fica entre: ``
* E as variáveis são colocadas desta maneira: ${variavel}

# Destructuring

* O destructuring é um recurso que pode ser utilizado em arrays e objetos;
* A ideia é transformar os itens de um desses dados em variáveis;
* Simplificando a declaração de n variáveis para apenas 1 linha!

# Spread operator

* O spread pode ser utiliado também em array e objetos;
* Utilizamos para constituir novos valores destes dados em outros arrays e objetos;
* Ou seja, podemos unir vários array de maneira simples ou adicionar valores de um objeto a outro, por exemplo;

# Classes

* As classes são recursos fundamentais para progamar com orientação a objetos;
* Agora o JS tem este recurso implementado, onde temos acesso a: constructor, propiedades, métodos e mais;
* Antes as classes eram baseadas em funções (constructor functions);
* Quando nós precissamos criar entidades que são semelhantes na estrutura mais possuim valores diferentes usamos
POO

# Herança 

* Podemos criar herança de classes com ES6 também;
* Utilizamos a palavra extends para referir a classe herdada;
* E as propiedades que utilizamos dela, devem ser enviadas via função super;


