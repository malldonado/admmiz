import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className="bg-white border-gray-200 mx-auto absolute top-0 h-14 z-10 w-full">
      <div className="mx-14 h-14 flex flex-wrap justify-between items-center">
          <a className="flex items-center">
            <Image src="/img/logo.svg" alt="Flowbite Logo" height={30} width={140} />
          </a>
      </div>
    </div>
  );
};

export default Navbar;
