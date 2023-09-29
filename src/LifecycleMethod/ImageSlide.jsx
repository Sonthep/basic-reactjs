import  { Component } from 'react';
import classNames from 'classnames';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1695904580203-f8ab6b7eb42a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1695754189866-f2f8eae7328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
      ],
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        currentIndex: (prevState.currentIndex + 1) % prevState.images.length
      }));
    }, 3000); // Change slide every 3 seconds
  }

  stopSlider() {
    clearInterval(this.interval);
  }

  render() {
    const { images, currentIndex } = this.state;
    return (
      <div className="flex items-center justify-center w-full h-full mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={classNames('absolute w-full h-full transition-opacity duration-500', {
              'opacity-100': index === currentIndex,
              'opacity-0': index !== currentIndex,
            })}
          />
        ))}
      </div>
    );
  }
}

export default ImageSlider;