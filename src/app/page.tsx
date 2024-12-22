export default function Home() {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Blurred background image */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-md -z-10"
                style={{ backgroundImage: "url(/cs1.jpg)" }}
            ></div>

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-6 md:px-8 lg:px-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Stylish Clothing for You
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
                    Discover the latest trends in fashion
                </p>
                <a
                    href="/shop"
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white rounded-md text-base sm:text-lg font-medium hover:bg-orange-600 transition duration-300"
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
}
