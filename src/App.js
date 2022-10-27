// import logo from './logo.svg';
import Link from './components/link/Link';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';

import logo from './image/peter.jpg'
import slack from './image/slack.png'
import github from './image/github.png'
import './App.css';


const linkTree = {
  profile: [
    {
      image: logo,
      twitterUsername: 'Wuzpa',
      slackName: 'peterime'
    }
  ],
  links: [
    { name : 'Twitter Link', id: 'twitter', link: 'https://twitter.com/Wuzpa' },
    { name : 'Zuri Team', id: 'btn__zuri', link: 'https://traning.zuri.team' },
    { name : 'Zuri Books', id: 'books', subText: 'This is where you find books about design and coding', link: 'https://books.zuri.team' },
    { name : 'Python Books', id: 'book__python', link: 'https://books.zuri.team/python-for-beginners?ref_id=peterime' },
    { name : 'Background Check for Coders', id: 'pitch', link: ' https://background.zuri.team' },
    { name : 'Design Books', id: 'book__design', link: 'https://books.zuri.team/design-rules' },
  ]
}

function App() {
  return (
    <div className="App">
      <header>
        <Profile data={linkTree.profile} />
      </header>
      <main>
        <Link data={linkTree.links} />
        <div className='icon'>
          <img src={slack} alt="slack" />
          <img src={github} alt="github" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
     
    </div>
  );
}

export default App;
