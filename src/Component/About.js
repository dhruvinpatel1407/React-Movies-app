import React from "react";

const About = () => {
  return (
    <div className="bg-black mt-16 bg-opacity-90 text-white py-12 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300">
          Discover, explore, and celebrate the world of movies with us.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <span className="text-white font-medium">Extensive Movie Library:</span> Dive into our collection of movies across genres, languages, and eras.
            </li>
            <li>
              <span className="text-white font-medium">Trending Content:</span> Stay up-to-date with the latest blockbusters, indie gems, and hidden treasures.
            </li>
            <li>
              <span className="text-white font-medium">Personalized Recommendations:</span> Find movies tailored to your unique tastes.
            </li>
            <li>
              <span className="text-white font-medium">Community Insights:</span> Share your reviews and ratings or see what others think about a film.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We aim to connect movie enthusiasts worldwide by creating a platform that celebrates the art of filmmaking. From epic adventures to heartwarming dramas, we want to ensure every story reaches its audience.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us on the Journey</h2>
          <p className="text-gray-300 leading-relaxed">
            Be part of our ever-growing community of movie lovers. Explore, review, and share your favorite films with fellow enthusiasts. Together, let’s celebrate the magic of storytelling through cinema!
          </p>
        </section>
        <section>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {/* Office 1 */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Head Office</h2>
          <p className="text-gray-300 text-center leading-relaxed">
            123 Movie Lane <br />
            Hollywood, CA 90210 <br />
            United States
          </p>
        </div>

        {/* Office 2 */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Branch Office</h2>
          <p className="text-gray-300 text-center leading-relaxed">
          123 Movie Street, <br />
          Film City, <br />
          Mumbai 10001
          </p>
        </div>
      </div>
        </section>

      </div>
    </div>
  );
};

export default About;
