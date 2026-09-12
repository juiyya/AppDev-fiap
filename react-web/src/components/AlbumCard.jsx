import React from 'react';

export default function AlbumCard({ album }) {
  return (
    <div className="album">
      <img src={album.capa} alt={'capa do álbum ' + album.titulo} />
      <div className="informacoes">
        <h2>{album.titulo}</h2>
        <p className="artista">{album.artista}</p>
        <p className="detalhes">{album.ano} • {album.genero} • {album.tempo}</p>
      </div>
    </div>
  );
}
