

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-green-800 text-white align-middle p-4 z-50 ">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};