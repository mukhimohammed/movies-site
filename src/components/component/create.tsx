import Link from "next/link"

export function Create() {
  return (
    <main className="bg-white text-black">
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Discover the Latest Movies</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/avengers.jpeg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  The Avengers
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Robert Downey Jr., Chris Evans, Mark Ruffalo</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Action, Adventure, Sci-Fi</p>
              <p className="text-sm line-clamp-3">
                Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the
                mischievous Loki and his alien army from taking control of the planet.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/inception.jpeg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  Inception
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Leonardo DiCaprio, Ellen Page, Joseph Gordon-Levitt</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Action, Adventure, Sci-Fi</p>
              <p className="text-sm line-clamp-3">
                A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse
                task of planting an idea in the mind of a CEO.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/darkight.jpeg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  The Dark Knight
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Christian Bale, Heath Ledger, Aaron Eckhart</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Action, Crime, Drama</p>
              <p className="text-sm line-clamp-3">
                When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept
                one of the greatest psychological and physical tests of his ability to fight injustice.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/interstellar.jpg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  Interstellar
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Adventure, Drama, Sci-Fi</p>
              <p className="text-sm line-clamp-3">
                A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  Guardians of the Galaxy
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Chris Pratt, Zoe Saldana, Dave Bautista</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Action, Adventure, Sci-Fi</p>
              <p className="text-sm line-clamp-3">
                A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking
                control of the universe.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  The Lord of the Rings: The Fellowship of the Ring
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Elijah Wood, Ian McKellen, Viggo Mortensen</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Adventure, Drama, Fantasy</p>
              <p className="text-sm line-clamp-3">
                A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring and save
                Middle-earth from the Dark Lord Sauron.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  The Matrix
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Action, Sci-Fi</p>
              <p className="text-sm line-clamp-3">
                A computer programmer is awakened from his simulated reality and must confront the realities of the
                world outside.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  Forrest Gump
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Tom Hanks, Robin Wright, Gary Sinise</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Drama, Romance</p>
              <p className="text-sm line-clamp-3">
                The story of a man who witnesses and influences several major historical events in the United States
                from the late 1950s to the 1990s.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Movie Poster"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-bold mb-2">
                <Link href="#" prefetch={false}>
                  The Shawshank Redemption
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">Tim Robbins, Morgan Freeman, Bob Gunton</p>
              <p className="text-sm text-gray-600 mb-2">Genre: Drama</p>
              <p className="text-sm line-clamp-3">
                Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of
                common decency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
