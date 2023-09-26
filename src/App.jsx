
import Jungle from './JSX/Jungle.jsx'
import Movie from './Component/Movie.jsx';
import Colorize from './ReactHook/useState/Colorize.jsx';
import RandomQuote from './ReactHook/useEffect/RandomGreet.jsx';
import FindUser from './ReactHook/Custom hooks/FindUser.jsx';

function App() {
 

  return (
    <>
      <Jungle />
      <Movie />
      <Colorize />
      <RandomQuote />
      <FindUser />
    </>
  )
}

export default App
