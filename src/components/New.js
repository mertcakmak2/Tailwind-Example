import React from 'react'

export default function New() {
    return (
        <div
            href=""
            class="relative block overflow-hidden bg-center bg-no-repeat bg-cover  rounded-xl"
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`
            }} >
            <span
                class="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full  right-4 top-4"
            >
                4.5

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1.5 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                </svg>
            </span>

            <div class="relative p-8 pt-40 text-white bg-black bg-opacity-40">
                <h5 class="text-2xl font-bold">Rome</h5>

                <p class="text-sm">Italy</p>
            </div>
        </div>
       
    )
}
