import React, { useState } from 'react';
import logo from '../src/assets/logo.png';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
            {/* Navbar Bölümü */}
            <header className='flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md'>
                <a href="#">
                    <img src={logo} alt="Logo" className='w-52 hover:scale-105 transition-all'/>
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
                
                {isMenuOpen && (
                    <div className='absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg'>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Anasayfa</li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Randevular</li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>İşlemler</li>
                        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Profil</li>
                    </div>
                )}
            </header>

            {/* Tablo Bölümü */}
            <div className="p-8">
                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                            </td>
                        </tr>
                        {/* Diğer satırları da aynı şekilde ekleyin */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
