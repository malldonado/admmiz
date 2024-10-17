"use client"
import Link from 'next/link';

const Button: React.FC = () => {
    return (
        <>
            <Link href='/pages/project/new'>
                <button className="bg-[#315bd4] text-white font-bold w-[150px] h-[50px] ml-4 rounded-xl">Novo Projeto</button>
            </Link>
        </>
    )
}

export default Button