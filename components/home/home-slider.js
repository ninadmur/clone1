import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HomeSlider = () => {
  return (
    <Carousel>
      <div>
        <img src="https://www.healthifyme.com/blog/wp-content/uploads/2019/08/Yoga-Weight-Loss-Feature-Image1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/11/18/14/15/woman-1834827_960_720.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488_960_720.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
export default HomeSlider;
