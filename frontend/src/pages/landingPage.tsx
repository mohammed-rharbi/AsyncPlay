
export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800">

      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to <span className="text-yellow-300">AsyncPlay</span>
          </h1>
          <p className="mt-4 text-lg">
            Watch together, stay in sync, and connect effortlessly. AsyncPlay brings playlists to life!
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-yellow-300">
            Explore Now
          </button>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose AsyncPlay?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Create & Share Playlists</h3>
              <p className="text-gray-600">
                Build your personalized video playlists and share them with friends in dedicated rooms.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Real-Time Sessions</h3>
              <p className="text-gray-600">
                Watch videos together in sync with powerful real-time streaming and interaction tools.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
              <p className="text-gray-600">
                Invite participants, manage rooms, and enjoy features like push-to-talk for discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Watch Together?</h2>
          <p className="mt-4">
            Sign up today to create playlists, share rooms, and enjoy synchronized streaming.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-yellow-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
