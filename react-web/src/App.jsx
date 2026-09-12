import React, { useState } from 'react';
import AlbumCard from './components/AlbumCard';
import albuns from './albuns';

export default function App() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('');

  function buscarAlbuns(evento) {
    evento.preventDefault();
    setFiltro(busca.trim().toLowerCase());
  }

  function limparBusca() {
    setBusca('');
    setFiltro('');
  }

  const albunsFiltrados = albuns.filter(function (album) {
    const texto = album.titulo + ' ' + album.artista + ' ' + album.genero + ' ' + album.tempo + ' ' + album.ano;
    return texto.toLowerCase().includes(filtro);
  });

  return (
    <div className="pagina">
      <header className="topo">
        <h1>meus álbuns</h1>
        <p className="introducao">logo abaixo segue a lista dos meus álbuns favoritos nos últimos tempos!</p>
        <a className="link-spotify" href="https://open.spotify.com/user/22sptkxgu2vxa2pknjgxl7ziy?si=3a61a96c41b84ada" target="_blank" rel="noopener noreferrer">abrir meu spotify</a>
      </header>
      <main>
        <form className="controles" onSubmit={buscarAlbuns}>
          <input aria-label="buscar álbuns" placeholder="buscar por álbum, artista ou gênero" value={busca} onChange={(evento) => setBusca(evento.target.value)} />
          <button type="submit">buscar</button>
          <button className="botao-secundario" type="button" onClick={limparBusca}>limpar</button>
        </form>
        <p className="mensagem-busca" role="status">{filtro ? albunsFiltrados.length + ' álbum(ns) encontrado(s)' : ''}</p>
        <div className="grade-albuns">
          {albunsFiltrados.map(function (album) {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </div>
      </main>
      <footer className="rodape"><p>albuns da juyya! • 2026</p></footer>
    </div>
  );
}
