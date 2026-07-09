import './App.css'

// Компонент карточки остается таким же, он просто принимает один фильм
function MovieCard({ movie }: { movie: { title: string; genre: string; year: string; description: string; rating: string } }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white text-slate-950 shadow-lg">
      <div className="flex aspect-2/3 items-center justify-center bg-sky-200 px-6 text-center text-2xl font-bold text-sky-950">
        {movie.title}
      </div>
      <div className="space-y-2 p-5">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <p className="text-sm text-slate-600">{movie.genre} • {movie.year}</p>
        <p className="text-sm text-slate-700">{movie.description}</p>
        <p className="font-semibold text-sky-700">Rating: {movie.rating}</p>
      </div>
    </article>
  );
}

function App() {
  // 1. Создаем массив фильмов (Mock-данные)
  const moviesList = [
    {
      id: 1,
      title: 'Starlight Summer',
      genre: 'Adventure',
      year: '2025',
      description: 'A group of friends discover a glowing map that leads to a summer they will never forget.',
      rating: '8.7'
    },
    {
      id: 2,
      title: 'Cyberpunk 2077: Edgerunners',
      genre: 'Sci-Fi',
      year: '2022',
      description: 'A street kid trying to survive in a technology and body modification-obsessed city of the future.',
      rating: '8.6'
    },
    {
      id: 3,
      title: 'Interstellar',
      genre: 'Drama',
      year: '2014',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      rating: '8.7'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase !text-violet-700">
          Movies App
        </p>
        <h1 className="mt-3 text-4xl font-bold">Find your next movie</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          A small React project for learning components, props, lists, state,
          and mock API data.
        </p>
        
        {/* 2. Выводим список фильмов с помощью сетки (grid) */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {moviesList.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;