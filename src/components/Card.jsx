import { motion } from 'framer-motion'

export default function Card({ image, title, description, onAction, variant = 'chapter' }) {
  if (variant === 'gallery') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="group relative aspect-square w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="font-serif text-white text-lg drop-shadow">{title}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-black">{title}</h3>
        <p className="mt-2 text-sm text-black/70 line-clamp-3">{description}</p>
        <div className="mt-4">
          <button
            onClick={onAction}
            className="inline-flex items-center rounded-full bg-black px-4 py-2 text-white text-sm hover:shadow-md transition-shadow"
          >
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  )
}
