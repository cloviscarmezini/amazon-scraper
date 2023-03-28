import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function HomePage(){
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon
        className="h-64 w-64 text-indigo-600/20"
      />

      <h1 className="text-3xl text-center mt-2 font-bold mb-5">
        Welcome to the Amazon Web Scraper
      </h1>
    </div>
  );
}

export default HomePage;