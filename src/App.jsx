import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Card from './components/Card'

// Content data (easy to extend later)
const chapters = [
  {
    id: 'awakening',
    title: 'Chapter I — Awakening',
    description:
      "Yume opens her eyes beneath a violet sky, where memories ripple like water and names have no sound.",
    image:
      'https://images.unsplash.com/photo-1544551763-7ef4200d2a57?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'echoes',
    title: 'Chapter II — Echoes',
    description:
      'Footsteps return without owners. In the corridors of dusk, she learns to listen between the walls.',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'astral-train',
    title: 'Chapter III — Astral Train',
    description:
      'A silver train cuts through galaxies. Each window holds a life she almost lived.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'tidelights',
    title: 'Chapter IV — Tidelights',
    description:
      'Lanterns drift across a black sea, carrying questions that do not want answers.',
    image:
      'https://images.unsplash.com/photo-1500530855697-067e39fa3bc8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'glass-garden',
    title: 'Chapter V — Glass Garden',
    description:
      'In a garden of crystal flowers, she recognizes her shadow and hums it back to sleep.',
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'finale',
    title: 'Chapter VI — The Quiet Door',
    description:
      'At the edge of dawn, a door without a handle waits. She knocks once and the sky answers.',
    image:
      'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1400&auto=format&fit=crop',
  },
]

const gallery = [
  {
    id: 'g1',
    title: 'Starlit Veil',
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g2',
    title: 'Neon Current',
    image:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g3',
    title: 'Quiet Planet',
    image:
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g4',
    title: 'Violet Rails',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g5',
    title: 'Crystal Tide',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g6',
    title: 'Echo Corridor',
    image:
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g7',
    title: 'Lantern Sea',
    image:
      'https://images.unsplash.com/photo-1486663845017-3eedaa78615f?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g8',
    title: 'Holographic Bloom',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
  },
]

function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-2xl md:text-3xl text-black"
            >
              A cinematic story told through NFTs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-black/70"
            >
              Discover fragments of memory, each chapter a collectible artwork with its own title and
              feeling. Wander gently — the universe answers softly.
            </motion.p>
            <div className="mt-8">
              <Link
                to="/chapters"
                className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-white text-sm hover:shadow-md transition-shadow"
              >
                Explore Chapters
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ChaptersPage() {
  const navigate = useNavigate()
  return (
    <main className="bg-white">
      <section className="pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl text-black"
          >
            Chapters
          </motion.h1>
          <p className="mt-3 text-black/60 max-w-2xl">
            Each chapter is an NFT: a scene, a mood, a step along Yume’s path. Hover to feel the
            motion.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((c) => (
              <Card
                key={c.id}
                image={c.image}
                title={c.title}
                description={c.description}
                onAction={() => navigate(`/chapters#${c.id}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function GalleryPage() {
  return (
    <main className="bg-white">
      <section className="pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl text-black"
          >
            Gallery
          </motion.h1>
          <p className="mt-3 text-black/60 max-w-2xl">
            A visual constellation of the collection. Hover to reveal titles; breathe in the space
            between frames.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <Card key={g.id} image={g.image} title={g.title} variant="gallery" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapters" element={<ChaptersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
