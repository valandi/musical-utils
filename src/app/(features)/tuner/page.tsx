import Tuner from './tuner';

export default function TunerPage() {
  return (
    <div className="flex flex-col  bg-dark-blue">
      <h1 className="text-2xl font-bold mb-4 text-center">Tuner</h1>
      <section className="w-3/5 mx-auto bg-white dark:bg-gray-800 py-8 px-4 mb-8 rounded-lg shadow-md">
        <Tuner />
      </section>
    </div>
  );
}
