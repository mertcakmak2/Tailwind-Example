import React from 'react'

export default function ProfileCard2() {
    return (
        <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800">
            <img alt="profil" src="https://www.tailwind-kit.com/images/landscape/1.jpg" class="rounded-t-lg h-28 w-full mb-4" />
            <div class="flex flex-col items-center justify-center p-4 -mt-16">
                <a href="#" >
                    <img alt="profil" src="https://media-exp1.licdn.com/dms/image/C4D03AQFltlB6neL2UQ/profile-displayphoto-shrink_800_800/0/1655898178338?e=1663200000&v=beta&t=uhLfq8Lt2J1PCFp9kwqMfstbpJRMDla5_zlrTChTvMI" class="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800" />
                </a>
                <p class="text-gray-800 dark:text-white text-xl font-medium mt-2">
                    Charlie
                </p>
                <p class="text-gray-400 text-xs mb-4">
                    Nantes
                </p>
                <p class="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
                    Professional
                </p>
                <div class="rounded-lg p-2 w-full mt-4">
                    <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                        <p class="flex flex-col">
                            Articles
                            <span class="text-black dark:text-white font-bold">
                                34
                            </span>
                        </p>
                        <p class="flex flex-col">
                            Followers
                            <span class="text-black dark:text-white font-bold">
                                455
                            </span>
                        </p>
                        <p class="flex flex-col">
                            Rating
                            <span class="text-black dark:text-white font-bold">
                                9.3
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
