/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { HiHome, HiUser } from 'react-icons/hi2';
import { HiSearch, HiPlus } from 'react-icons/hi';
import { useAuth } from '../contexts/AuthContext';

export default function Sidebar() {
  const { isLogged, userId } = useAuth();
  return (
    <div className="flex border-r border-[#b430a6]">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center ml-2 text-[#b430a6]">
            <h2 className="text-xl font-bold">O'Sport</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  href="/"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-[#b430a6] hover:text-[#f9fafb]"
                >
                  <HiHome size={22} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/recherche"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-[#b430a6] hover:text-[#f9fafb]"
                >
                  <HiSearch size={22} />
                  <span>Recherche</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href={isLogged ? `/profil/${userId}` : '/connexion'}
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-[#b430a6] hover:text-[#f9fafb]"
                >
                  <HiUser size={22} />
                  <span>Profil</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/ajouter"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-[#b430a6] hover:text-[#f9fafb]"
                >
                  <HiPlus size={22} />
                  <span>Ajouter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}