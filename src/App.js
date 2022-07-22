import './style.css';

import ProfileCard from './components/ProfileCard';
import Post from './components/Post';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import AnimatedCards from './components/AnimatedCards';
import PostCardWithPhotos from './components/PostCardWithPhotos';
import CallToAction from './components/CallToAction';
import Dashboard from './components/Dashboard';
import Page from './components/Page';
import Page2 from './components/Page2';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">

      {/* <Modal></Modal> */}
      {/* <Page2></Page2> */}
      <Page></Page>
      {/* <Dashboard></Dashboard> */}
      <CallToAction></CallToAction>
      <PostCardWithPhotos></PostCardWithPhotos>
      <AnimatedCards></AnimatedCards>
      <NotFoundPage></NotFoundPage>
      <Login></Login>
      <Post></Post>
      <ProfileCard></ProfileCard>

      {/* <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
          <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
        </div>
      </div> */}


    </div>
  );
}

export default App;
