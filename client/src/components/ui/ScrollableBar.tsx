import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desk: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

const ScrollableBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel containerClass='w-full flex gap-2' responsive={responsive}>
      {children}
    </Carousel>
  );
};

export default ScrollableBar;
