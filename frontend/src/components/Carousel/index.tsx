import { ReactNode, useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container } from './styles';
import { GrNext, GrPrevious } from "react-icons/gr";

interface CarouselTypes {
  image: string;
  name: string;
  price?: string;
  button?: ReactNode;
}

function Carousel ({ image, name, price, button }: CarouselTypes) {
  const [visibleSlides, setVisibleSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1750) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(4);
      }
    };

    handleResize();
  }, []);

  return (
    <Container>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={6}
        visibleSlides={visibleSlides}
        infinite={true}
        isIntrinsicHeight={true}
        className='provider'
      >
        <Slider className='slider'>
          {Array.from({ length: 6 }).map((_, index) => (
            <Slide index={index} key={index}>
              <div className='slide'><img src={image} alt="" /></div>
              <div className='desc'>
                <span>{name}</span>
                <span>{price}</span>
                {button}
              </div>
            </Slide>
          ))}
        </Slider>
        <div className='navigation'>
          <ButtonBack className='back buttonArrow' children={<GrPrevious size={40} />} />
          <ButtonNext className='next buttonArrow' children={<GrNext size={40} />} />
        </div>
      </CarouselProvider>
    </Container>
  );
}

export default Carousel;
