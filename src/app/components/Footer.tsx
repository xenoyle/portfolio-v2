

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-background text-foreground align-middle p-4 z-50 border-t-3 border-accent">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Connor W. Floyd. All rights reserved.</p>
            </div>
        </footer>
    );
};