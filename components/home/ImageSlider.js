import { HomeSlider } from './HomeSlider';

const ImageSlider = () => {
  return (
    <>
      {HomeSlider.map((slide, index) => {
        return <img src={slide.image} />;
      })}
    </>
  );
};
