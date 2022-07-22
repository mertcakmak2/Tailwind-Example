import React from 'react'

export default function AnimatedCards() {
    return (
        <div class="bg-white">
            <div class="container mx-auto px-6 py-16">
                <div class="mx-auto sm:w-6/12 lg:w-5/12 xl:w-[30%]">
                    <div>
                        <h1 class="text-3xl">Your Library</h1>
                        <p class="mt-2 text-gray-600">Listen to your favorite music today !</p>
                    </div>

                    <div class="mt-4">
                        <div class="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
                            <div class="group relative flex cursor-pointer justify-between rounded-xl bg-amber-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-amber-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                                <div class="relative  space-y-1 p-4">
                                    <h4 class="text-lg text-amber-900">Smooth Criminal</h4>
                                    <div class="relative h-6 text-amber-800 text-sm">
                                        <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">Michael Jackson</span>
                                        <a href="" class="flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0">
                                            <span>Listen now </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img class="absolute bottom-0 right-6 w-[6rem] transition duration-300 group-hover:scale-[1.4]" src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Michael-Jackson.png" alt="" />
                            </div>
                        </div>
                        <div class="relative -mr-6 flex flex-col justify-end overflow-hidden rounded-b-xl pt-6 pr-6">
                            <div class="group relative flex cursor-pointer justify-between rounded-xl bg-orange-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-orange-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                                <div class="relative space-y-1 p-4">
                                    <h4 class="text-lg text-orange-900">Ice Cream</h4>
                                    <div class="relative h-6 text-orange-800 text-sm">
                                        <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">Selena Gomez</span>
                                        <a href="" class="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0">
                                            <span>Listen now </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img class="absolute -bottom-1 right-0 w-[6rem] transition duration-300 group-hover:scale-[1.4]" src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Selena-Gomez.png" alt="" />
                            </div>
                        </div>
                        <div class="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
                            <div class="group relative flex cursor-pointer justify-between rounded-xl bg-rose-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-rose-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                                <div class="relative space-y-1 p-4">
                                    <h4 class="text-lg text-rose-900">Love yourself</h4>
                                    <div class="relative h-6 text-rose-800 text-sm">
                                        <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">Justin Bieber</span>
                                        <a href="" class="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0">
                                            <span>Listen now </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img class="absolute bottom-0 right-6 w-[6rem] transition duration-300 group-hover:scale-[1.4]" src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Justin-Bieber.png" alt="" />
                            </div>
                        </div>
                        <div class="relative -mr-6 flex flex-col justify-end overflow-hidden rounded-b-xl pt-6 pr-6">
                            <div class="group relative flex cursor-pointer justify-between rounded-xl bg-fuchsia-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-fuchsia-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                                <div class="relative w-7/12 space-y-1 p-4">
                                    <h4 class="text-lg text-fuchsia-900">7 Rings</h4>
                                    <div class="relative h-6 text-fuchsia-800 text-sm">
                                        <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">Ariana Grande</span>
                                        <a href="" class="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0">
                                            <span>Listen now </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img class="absolute -bottom-1 right-0 w-[6rem] transition duration-300 group-hover:scale-[1.4]" src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Ariana-Grande.png" alt="" />
                            </div>
                        </div>
                        <div class="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
                            <div class="group relative flex cursor-pointer justify-between rounded-xl bg-blue-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-blue-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                                <div class="relative space-y-1 p-4">
                                    <h4 class="text-xl text-blue-900">Diamond</h4>
                                    <div class="relative h-6 text-blue-800 text-sm">
                                        <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">Rihanna</span>
                                        <a href="" class="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0">
                                            <span>Listen now </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img class="absolute bottom-0 right-6 w-[6rem] transition duration-300 group-hover:scale-[1.4]" src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Rihanna.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
