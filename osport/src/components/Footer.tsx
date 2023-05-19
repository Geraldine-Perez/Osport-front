import Link from 'next/link';

export default function Footer() {
  return (

    <div className="flex bg-white rounded-lg shadow m-4 dark:bg-gray-800 mb-20 fixed bottom-0 xl:left-1/2 ">
      <div className="p-4 ">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="mr-4 hover:underline ">
            <Link href="/">À propos</Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline ">Politique général</Link>
          </li>
          <li className="mr-4 hover:underline ">
            <Link href="/">Coockies</Link>
          </li>
          <li className="hover:underline">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>

  );
}