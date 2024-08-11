import React from "react";

const songs = [
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    year: 1975,
    genre: "Rock",
    image: "https://example.com/bohemian-rhapsody.jpg",
  },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    year: 1971,
    genre: "Rock",
    image: "https://example.com/stairway-to-heaven.jpg",
  },
  {
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    year: 1971,
    genre: "Rock",
    image: "https://example.com/imagine.jpg",
  },
];

function App() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {songs.map((song, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 w-64">
          <img 
            src={song.image} 
            alt={song.title} 
            className="w-full h-48 object-cover mb-4 rounded" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
            }}
          />
          <h2 className="text-xl font-bold mb-4">Song Details</h2>
          <p className="mb-2"><span className="font-semibold">Title:</span> "{song.title}"</p>
          <p className="mb-2"><span className="font-semibold">Artist:</span> {song.artist}</p>
          <p className="mb-2"><span className="font-semibold">Album:</span> {song.album}</p>
          <p className="mb-2"><span className="font-semibold">Year:</span> {song.year}</p>
          <p className="mb-4"><span className="font-semibold">Genre:</span> {song.genre}</p>
          <button
            onClick={() => alert(`You clicked ${song.title}!`)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Play Song
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;