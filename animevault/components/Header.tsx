import Image from 'next/image'

function Headers(){
    return (
        <div className="sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col sm:gap-16 gap-0">
            <Image src="/logo.svg" alt="logo" width={40} height={40}/>
                <h1>Home</h1>
                <h1>Bookmark</h1>
                <h1>Comics</h1>
        </div>
    )
}

export default Headers;