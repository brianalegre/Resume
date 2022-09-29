// Import React
import React from 'react';

// Import React Icons
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'



// Me component
function Me(resumeData) {

    // Destructure resumeData
    const { me } = resumeData.resumeData[4]

    return (
        <div className="lg:col-span-4 mb-36 col-span-12 h-12 flex flex-col items-center lg:items-start">
            <div className="space-y-2">
                <div className="flex lg:flex-row flex-col items-center space-x-4">
                    {/* <img itemProp="image" alt={me.name} className="object-cover h-12 w-12 rounded-full" src={me.picture} /> */}
                    <p itemProp="name" className="font-bold text-gray-800 text-2xl">{me.name}</p>
                </div>
                <p>{me.title}</p>
            </div>
            <a itemProp="email" href="mailto:{{basics.email}}" className="cursor-pointer transition-colors duration-150 ease-in-out underline text-sm hover:text-fuchsia-700">
                {me.email}
            </a>
            <p className="text-sm">{me.location.city}</p>
            <p className="text-sm">{me.location.region}, {me.location.countryCode}</p>
            <div className="space-x-3 py-3 flex items-center">
                <a aria-label={me.profiles[0].network} href={me.profiles[0].url} target='_blank' rel='noreferrer'> <BsGithub className='hover:text-fuchsia-700' /> </a>
                <a aria-label={me.profiles[1].network} href={me.profiles[1].url} target='_blank' rel='noreferrer'> <AiFillLinkedin className='hover:text-fuchsia-700' /> </a>
                <a aria-label={me.profiles[2].network} href={me.profiles[2].url} target='_blank' rel='noreferrer'> <CgProfile className='hover:text-fuchsia-700' /></a>
            </div>
        </div >
    );
}

// Export Me component
export default Me;
