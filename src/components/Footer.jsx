export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-center">
        <p className="text-xs md:text-sm text-black/60">
          © {new Date().getFullYear()} Fragments of Yume — A cinematic NFT story. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
