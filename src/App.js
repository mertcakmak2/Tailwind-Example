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
import WeatherApp from './components/WeatherApp';
import Card from './components/Card';
import SharingCard from './SharingCard';
import Banner from './components/Banner';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="App">


      <Banner/>
      <GetStarted/>
      <SharingCard></SharingCard>

      {/* <Modal></Modal>
      <Card></Card>
      <Page2></Page2>
      <WeatherApp></WeatherApp>
      <Page></Page>
      <Dashboard></Dashboard>
      <CallToAction></CallToAction>
      <PostCardWithPhotos></PostCardWithPhotos>
      <AnimatedCards></AnimatedCards>
      <NotFoundPage></NotFoundPage>
      <Login></Login>
      <Post></Post>
      <ProfileCard></ProfileCard> */}

    </div >
  );
}

export default App;
