// import logo from './logo.svg';
import logo from './image/peter.jpg'
import './App.css';
import Link from './components/link/Link';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';


const linkTree = {
  profile: [
    {
      image: logo,
      twitterUsername: 'Wuzpa',
      slackName: 'MrP'
    }
  ],
  links: [
    { name : 'Twitter Link', link: 'https://twitter.com/Wuzpa' },
    { name : 'Zuri Team', link: 'https://traning.zuri.team' },
    { name : 'Zuri Books', link: 'https://books.zuri.team' },
    { name : 'Python Books', link: 'https://books.zuri.team/python-for-beginners?ref_id=mrp' },
    { name : 'Background Check for Coders', link: ' https://background.zuri.team' },
    { name : 'Design Books', link: 'https://books.zuri.team/design-rules' },
  ]
}

function App() {
  return (
    <div className="App">
      <header>
        <Profile data={linkTree.profile} />
      </header>
      <main>
        <Link />
      </main>
      <footer>
        <Footer />
      </footer>
     
    </div>
  );
}

export default App;
