// Import React
import React from 'react';



// Me component
function Me(resumeData) {

    // Destructure resumeData
    const { me } = resumeData.resumeData[4]

    return (
        <div>
            <div className="space-y-2">
                <div className="flex lg:flex-row flex-col items-center space-x-4">
                    <img itemProp="image" alt={me.name} className="object-cover h-12 w-12 lg:rounded-lg rounded-full" src={me.picture} />
                    <p itemProp="name" className="font-bold text-gray-800 text-2xl">{me.name}</p>
                </div>
                <p>{me.title}</p>
            </div>
            <a itemProp="email" href="mailto:{{basics.email}}" className="cursor-pointer transition-colors duration-150 ease-in-out {{hoverAccent}} underline text-sm">
                {me.email}
            </a>
            <p className="text-sm">{me.location.city}</p>
            <p className="text-sm">{me.location.region}, {me.location.countryCode}</p>
            <div className="space-x-3 py-3 flex items-center">
                <a aria-label={me.profiles[0].network} href={me.profiles[0].network.url}> </a>
                <a aria-label={me.profiles[1].network} href={me.profiles[1].network.url}> </a>
                <a aria-label={me.profiles[2].network} href={me.profiles[2].network.url}> </a>
            </div>
        </div >
    );
}

// Export Me component
export default Me;
