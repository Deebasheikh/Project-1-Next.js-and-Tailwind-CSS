export default function StoreLocations() {
    return (
        <div className="bg-gray-50 py-12 mb-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Store Locations</h1>
            <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
                Find a Cross Stitch store near you. Visit us to explore our latest collections and experience our quality craftsmanship in person.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {/* Store Location Cards */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Lucky One Mall</h2>
                    <p className="text-gray-600">
                        2nd Floor, LA-2/B, Block 21,<br />
                        Main Rashid Minhas Rd,<br />
                        Block 21 Gulberg Town, Karachi
                    </p>
                    <p className="mt-4 text-blue-500 font-semibold">Opening Hours: 10AM - 10PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Emporium Mall</h2>
                    <p className="text-gray-600">
                        1st Floor, Abdul Haque Rd,<br />
                        Johar Town, Lahore
                    </p>
                    <p className="mt-4 text-blue-500 font-semibold">Opening Hours: 10AM - 10PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Dolmen Mall Clifton</h2>
                    <p className="text-gray-600">
                        Ground Floor, Marine Dr,<br />
                        Clifton, Karachi
                    </p>
                    <p className="mt-4 text-blue-500 font-semibold">Opening Hours: 10AM - 10PM</p>
                </div>
            </div>
        </div>
    );
}
