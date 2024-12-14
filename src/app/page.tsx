import Link from 'next/link';
import { Clock, Mic2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="px-4 py-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
          Musician's App
        </h1>
      </header>
      <section className="bg-white dark:bg-gray-800 py-8 px-4 mb-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to the Musician's App. This tool provides two essential
          features for musicians:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
          <li>A precise metronome to help you keep time</li>
          <li>An accurate tuner for various instruments</li>
        </ul>
      </section>
      <main className="flex-1 container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/metronome" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center space-y-4">
              <Clock className="h-16 w-16 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Metronome
              </h2>
            </div>
          </Link>
          <Link href="/tuner" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center space-y-4">
              <Mic2 className="h-16 w-16 text-green-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Tuner
              </h2>
            </div>
          </Link>
        </div>
      </main>
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Musician's App
      </footer>
    </div>
  );
}
