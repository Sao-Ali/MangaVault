import Image from 'next/image';

function Hero(){
    return (
        <header
            className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
            <div className="flex-1 flex flex-col gap-10">
                <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
                    Explore The Vault
                </h1>
                <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search Vault..."/>
            </div>
            <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
                <Image src="/anime.png" alt="anime" fill className="object-contain"/>
            </div>
        </header>
    )
}

export default Hero;

