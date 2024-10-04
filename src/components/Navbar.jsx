import React, { useState } from 'react'; // React ve useState'i import etmeyi unutmayın
import logo from '../src/assets/logo.png';


function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
            <header className='flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md'>
                <a href="#">
                    <img src={logo} alt="" className='w-52 hover:scale-105 transition-all'/>
                </a>
                
                <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Anasayfa</li>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Randevular</li>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>İşlemler</li>
                    <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Profil</li>
                </ul>

                <div className='relative hidden md:flex items-center justify-center gap-3'>
                    <i className='bx bx-search absolute left-3 text-2xl text-gray-500'></i>
                    <input type="text" placeholder='search...' className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500' />
                </div>

                <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
                
                {isMenuOpen && ( // Menü açıkken göster
                    <div className='absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg'>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Anasayfa</li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Randevular</li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>İşlemler</li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Profil</li>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App; 