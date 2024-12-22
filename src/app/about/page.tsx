export default async function About() {
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });
    return (
        <div className="flex flex-col items-center p-6 sm:p-8 bg-white text-gray-800 min-h-screen">
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">About Cross Stitch</h1>
            <p className="text-base sm:text-lg text-center max-w-xl sm:max-w-3xl mb-6">
                Cross Stitch is a leading fashion brand that combines contemporary style with the 
                rich cultural heritage of Pakistan. Known for our intricate designs and quality 
                craftsmanship, we bring traditional art forms to life through modern, elegant 
                clothing that resonates with fashion-forward individuals.
            </p>

            {/* Vision Section */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-center">Our Vision</h2>
            <p className="text-sm sm:text-base text-center max-w-lg sm:max-w-2xl mb-6">
                At Cross Stitch, we aim to inspire and empower by blending timeless traditions 
                with cutting-edge designs. Our commitment to quality and creativity ensures that 
                each piece not only enhances your wardrobe but also tells a story of elegance 
                and authenticity.
            </p>

            {/* Why Choose Us Section */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-center">Why Choose Us</h2>
            <p className="text-sm sm:text-base text-center max-w-lg sm:max-w-2xl">
                We offer a wide range of collections that cater to diverse tastes and occasions, 
                with a focus on comfort, durability, and style. Whether you're looking for classic 
                or contemporary designs, Cross Stitch has something unique to offer for everyone.
            </p>
        </div>
    );
}
