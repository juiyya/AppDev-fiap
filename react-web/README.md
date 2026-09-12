# meus álbuns

catálogo dos meus 13 álbuns favoritos feito com react para web, javascript e css. o vite inicia o ambiente de desenvolvimento e gera a versão de produção.

## como testar

com o node.js instalado, abra o terminal dentro desta pasta:

```bash
npm install
npm run dev
```

abra o endereço que aparecer no terminal. 

## como funciona

- `src/albuns.js`: array com os dados e os caminhos das capas;
- `src/App.jsx`: tela, busca e exibição dos álbuns com `map`;
- `src/components/AlbumCard.jsx`: componente que recebe um álbum por props e mostra suas informações;
- `src/style.css`: cores, espaçamentos e grid responsivo;
- `public/assets`: imagens do projeto.

o `useState` guarda o texto da busca. o `filter` seleciona os álbuns e o `map` cria um componente para cada resultado. a propriedade `key` identifica cada álbum usando seu id.

## grid responsivo

o css usa `display: grid`, `repeat` e `gap`. as regras `@media` alteram o número de colunas:

acima de 1100px -> 4 colunas
de 821px até 1100px -> 3 colunas
de 541px até 820px -> 2 colunas
até 540px -> 1 coluna
