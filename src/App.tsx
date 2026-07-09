function MovieCard({
  movie,
}: {
  movie: {
    title: string;
    poster_url?: string;
    genre: string;
    year: number;
    description: string;
    rating: number;
  };
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--code-bg)] text-left shadow-md transition-shadow hover:shadow-[var(--shadow)]">
      {/* Если постер есть — рендерим картинку, если нет — заглушку */}
      {movie.poster_url ? (
        <img
          className="aspect-2/3 w-full object-cover border-b border-[var(--border)]"
          src={movie.poster_url}
          alt={movie.title}
        />
      ) : (
        <div className="flex aspect-2/3 items-center justify-center bg-[var(--accent-bg)] border-b border-[var(--border)] px-6 text-center text-xl font-bold text-[var(--accent)]">
          {movie.title}
        </div>
      )}

      <div className="space-y-2 p-5">
        <h2>{movie.title}</h2>
        <p className="text-sm font-medium text-[var(--accent)]">
          {movie.genre} • {movie.year}
        </p>
        <p className="text-sm">{movie.description}</p>
        <p className="text-sm font-semibold">
          Rating: <span className="text-[var(--accent)]">{movie.rating}</span>
        </p>
      </div>
    </article>
  );
}

function App() {
  // Заменили пути на реальные ссылки с красивыми фото под каждый жанр
  const moviesList = [
    {
      id: 1,
      title: "Starlight Summer",
      poster_url: "posters/starlight-summer.svg",
      year: 2025,
      genre: "Adventure",
      rating: 8.7,
      description: "A group of friends discover a glowing map that leads to a summer they will never forget.",
    },
    {
      id: 2,
      title: "City of Echoes",
      poster_url: "posters/city-of-echoes.svg",
      year: 2024,
      genre: "Mystery",
      rating: 8.1,
      description: "A young reporter follows strange sounds through a city full of hidden stories.",
    },
    {
      id: 3,
      title: "Ocean Notes",
      poster_url: "posters/ocean-notes.svg",
      year: 2023,
      genre: "Drama",
      rating: 7.9,
      description: "Two sisters rebuild their friendship while saving their family music shop by the sea.",
    },
    {
      id: 4,
      title: "Pixel Hearts",
      poster_url: "posters/pixel-hearts.svg",
      year: 2026,
      genre: "Comedy",
      rating: 8.4,
      description: "A shy game designer accidentally becomes famous after her tiny game goes viral.",
    },
    {
      id: 5,
      title: "Moonlit Code",
      poster_url: "posters/moonlit-code.svg",
      year: 2025,
      genre: "Sci-Fi",
      rating: 8.9,
      description: "A student builds a robot that can read old messages hidden in moonlight.",
    },
    {
      id: 6,
      title: "The Last Train",
      poster_url: "posters/the-last-train.svg",
      year: 2022,
      genre: "Thriller",
      rating: 7.6,
      description: "Three strangers must solve one puzzle before the final train leaves the station.",
    },
  ];

  return (
    <main className="px-6 py-10 text-left">
      <section className="mx-auto max-w-5xl">
        <span className="inline-block rounded-md bg-[var(--accent-bg)] border border-[var(--accent-border)] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
          Movies App
        </span>
        <h1 className="mt-4">Find your next movie</h1>
        <p className="max-w-2xl opacity-80">
          A small React project for learning components, props, lists, state, and mock API data.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {moviesList.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;