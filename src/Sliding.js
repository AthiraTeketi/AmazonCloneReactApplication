import { useState } from 'react';
import './Sliding.css'

const Sliding = () => {
    const HeroElementImages = [
      '/HeroElement1.PNG',
      '/HeroElement2.PNG',
      '/HeroElement3.PNG'
    ];
  
    const [currentImage, setCurrentImage] = useState(0);
  
    const PrevElement = () => {
      const newImage = (currentImage - 1 + HeroElementImages.length) % HeroElementImages.length;
      setCurrentImage(newImage);
    };
  
    const NextElement = () => {
      const newImage = (currentImage + 1) % HeroElementImages.length;
      setCurrentImage(newImage);
    };

    return (
        <div className='SlidingComponent'>
          <button className='leftArrow' onClick={PrevElement}>&lt;
          </button>
          <img src={HeroElementImages[currentImage]} alt='Hero Element' />
          <button className='rightArrow' onClick={NextElement}> &gt;

          </button>
        </div>
      );
    };

    export default Sliding;