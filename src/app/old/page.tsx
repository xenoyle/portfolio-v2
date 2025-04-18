export default function OldSite() {
    return (
      <div className="w-full h-screen">
        <div className="bg-yellow-100 text-yellow-900 text-center p-2 font-semibold">
            You&apos;re viewing the legacy version of this site
        </div>

        <iframe
          src="/old/index.html"
          className="w-full h-full border-none"
          title="Old Website"
        />
      </div>
    );
  }
  