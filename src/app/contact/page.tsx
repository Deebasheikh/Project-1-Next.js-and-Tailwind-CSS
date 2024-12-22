export default function Contact() {
    return (
        <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
            <p className="text-sm sm:text-lg text-gray-600 mb-6 text-center">We're here to help you</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-4 mb-4 text-center">Contact Information</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
                Cross Stitch LuckyOne Mall<br />
                Lucky One Mall, 2nd Floor, LA-2/B, Block 21, Main Rashid Minhas Rd,<br />
                Block 21 Gulberg Town, Karachi
            </p>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mt-4 mb-2">Email:</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 text-center">sales@mail.us.crossstitch.pk</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-8 mb-4 text-center">Opening Hours</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center">
                Our customer care representative will be available for support from <br />
                (10AM to 5.30PM) Mon to Sat
            </p>
        </div>
    );
}
