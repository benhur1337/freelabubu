import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">Follow us on social media:</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="https://www.youtube.com/channel/UCq_vyeyp2z4u_pQP9Vlypmg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" target="_blank">
              YouTube
            </a>
            <a href="https://x.com/FreeLabubu" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" target="_blank">
              Twitter
            </a>
            <a href="https://www.instagram.com/freelabubuofficial/" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded" target="_blank">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/freelabubu-32b80a313?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE-tFVMBJjDmJlhrW9MmnliQWiprLGFqe8I&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bdvkt8xgeTNerEyDDnkv7mw%3D%3D" class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" target="_blank">
              LinkedIn
            </a>
            <a href="https://discord.gg/fkf9Sc3qWz" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" target="_blank">
              Discord Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}