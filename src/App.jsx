
import Jungle from './JSX/Jungle.jsx'
import Movie from './Component/Movie.jsx';
import Colorize from './ReactHook/useState/Colorize.jsx';
import RandomQuote from './ReactHook/useEffect/RandomGreet.jsx';
import FindUser from './ReactHook/Custom hooks/FindUser.jsx';
import ImageSlider from './LifecycleMethod/ImageSlide.jsx';
import Counter from './LifecycleMethod/Couter.jsx';

function App() {
 

  return (
    <div className='flex flex-col gap-[20rem]'>
      <Jungle />
      <Movie />
      <Colorize />
      <RandomQuote />
      <FindUser />
      <ImageSlider />
      <Counter />
    </div>
  )
}

export default App
