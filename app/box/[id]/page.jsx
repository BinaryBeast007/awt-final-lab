"use client";  

import { useParams } from 'next/navigation';
import Navbar from '@/app/utils/navbar';
import Footer from '@/app/utils/footer';

const BoxPage = () => {
  const { id } = useParams(); 

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-white-900">Details of Box {id}</h1>
        <p className="mt-4 text-lg text-white-700">
          This is the page for Box {id}.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BoxPage;
