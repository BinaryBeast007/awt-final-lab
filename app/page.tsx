import React from 'react';
import Link from "next/link";
import Navbar from '@/app/utils/navbar';
import Header from '@/app/utils/header';
import Footer from '@/app/utils/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/box/1" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Box 1</h5>
          <p className="font-normal text-gray-700">Explore the details of Box 1.</p>
        </Link>

        <Link href="/box/2" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Box 2</h5>
          <p className="font-normal text-gray-700">Explore the details of Box 2.</p>
        </Link>

        <Link href="/box/3" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Box 3</h5>
          <p className="font-normal text-gray-700">Explore the details of Box 3.</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default App;
