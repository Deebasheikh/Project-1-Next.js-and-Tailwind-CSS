export default function Gallery() {
  return (
      <div className="bg-gray-50 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">Our Gallery</h1>
          <p className="text-sm sm:text-base text-center text-gray-600 mb-12 max-w-xl mx-auto">
              Explore our latest collections and timeless designs. Each piece is crafted with care, 
              combining traditional artistry with contemporary style.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
              {/* Gallery images */}
              {["/bg6.jpg", "/cs18.jpg", "/cs2.jpg", "/cs3.webp", "/cs4.webp", "/cs24.webp", "/cs25.webp", "/cs12.jpg"].map((src, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                      <img
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                  </div>
              ))}
          </div>
      </div>
  );
}
