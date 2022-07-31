import React, { useEffect } from 'react'
import Header from '../../layouts/Header'
import Banner from '../../components/Banner'
import PostwithPhotos from '../../components/PostCardWithPhotos'
import ProfileCard from '../../components/ProfileCard'
import ProfileCard2 from '../../components/ProfileCard2'

import New from '../../components/New'
import axios from 'axios'

export default function HomePage() {

    useEffect(() => {
        // var user = {
        //     "email": Math.random() + "@gmail.com",
        //     "password": "react"
        // }
        // var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IkFETUlOIn0seyJhdXRob3JpdHkiOiJNT0RFUkFUT1IifSx7ImF1dGhvcml0eSI6IlVTRVIifV0sImV4cCI6MTY2MDEzMDg2MSwidXNlcklkIjoyLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.OnZSXl1GPGvZO-scZietrXcORvmRVxSbeBmYAM_2mpEEYtiW9hwOUrL2VKCgwon0lzU6n5Nsz0xeuOSab9_N_A"
        // axios.get("http://api.scout.com/api/user-service/users/", { headers: { Authorization: `Bearer ${token}` } }).then(res => {
        //     console.log(res)
        // })

        // axios.get("http://api.scout.com/api/user-service/users/1", { headers: { Authorization: `Bearer ${token}` } }).then(res => {
        //     console.log(res)
        // })

        // axios.post("http://api.scout.com/api/user-service/users/login", {  "email": "admin@gmail.com", "password": "admin" }).then(res => {
        //     console.log(res) 
        // }).catch(e => {
        //     console.log({
        //         status:e.response.status,
        //         message: e.response.data
        //     })
        // })

        // axios.post("http://localhost:9090/api/user-service/users", user).then(res => {
        //     console.log(res)
        // }) 
    }, [])


    return (
        <>
            <Header></Header>
            <Banner></Banner>

            {/* <div class="md:container columns-3 py-5 md:mx-auto grid-container gap-3  grid grid-cols-4">
                <div class="item1 col-span-1 bg-white hover:text-white rounded-md text-sm font-medium">
                    Profile Card
                </div>
                <div class="item2 col-span-2">
                    <PostwithPhotos></PostwithPhotos>
                </div>
                <div class="item3 col-span-1 bg-slate-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    News   
                </div>
            </div> */}

            <div class="md:container md:mx-auto py-5">
                <div class="columns-3 grid md:grid-cols-4 gap-3 ">

                    {/* Profile Card */}
                    <div class="col-span-1">
                        {/* <ProfileCard></ProfileCard> */}
                        <ProfileCard2></ProfileCard2>

                    </div>

                    {/* Posts */}
                    <div class=" col-span-2 w-full">
                        <div>Posts</div>
                        <div class="relative flex py-4 items-center">
                            <div class="flex-grow border-t border-gray-400"></div>
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <PostwithPhotos></PostwithPhotos>
                    </div>

                    {/* News */}
                    <div class="col-span-1 bg-white px-3 py-2 rounded-md text-sm font-medium">
                        <New></New>

                        {/* <div class="shadow-lg rounded-xl max-w-xs p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                            <a href="#" class="w-full h-full block">
                                <div class="w-full">
                                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                        Improve css design of the carousel
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-300 text-xs font-medium mb-2">
                                        Sunday 13 october
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-300 text-sm mb-4">
                                        You’ve been coding for a while now and know your way around a CSS file. You’re certainly no master, but with enough fiddling you can get where you want to go.
                                    </p>
                                    <div class="flex dark:text-gray-200 items-center justify-between">
                                        <p>
                                            Task progress
                                        </p>
                                        <p>
                                            33%
                                        </p>
                                    </div>
                                    <div class="w-full h-2 bg-gray-400 rounded-full mt-3 mb-6">
                                        <div class="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full">
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="flex -space-x-2">
                                            <a href="#" class="">
                                                <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/1.jpg" alt="Guy" />
                                            </a>
                                            <a href="#" class="">
                                                <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/2.jpeg" alt="Max" />
                                            </a>
                                            <a href="#" class="">
                                                <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/3.jpg" alt="Charles" />
                                            </a>
                                            <a href="#" class="">
                                                <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/4.jpg" alt="Jade" />
                                            </a>
                                        </div>
                                        <span class="text-gray-500 dark:text-gray-300 ml-2">
                                            + 4 more
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div> */}

                    </div>

                </div>
            </div>

        </>
    )
}
