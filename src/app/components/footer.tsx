import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="text-center mb-4">
                <p>&copy; 2024 Cross Stitch. All rights reserved.</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
                <li>
                    <Link href="mailto:info@CrossStitch.com" className="hover:underline">
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="https://instagram.com" className="hover:underline">
                        Instagram
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
