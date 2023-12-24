
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import electricityIcon from "../../public/icon/Light bulb.svg";
import waterIcon from "../../public/icon/Tap Water Drink.svg";
import cableIcon from "../../public/icon/cable tv.svg";

const Services = () => {
  const services = [
    {
      icon: electricityIcon,
      title: "Electricidad",
    },
    {
      icon: waterIcon,
      title: "Agua",
    },
    {
      icon: cableIcon,
      title: "Cable",
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <section>
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      dynamicHeight={false} // Evita que la altura cambie al cambiar las diapositivas
      emulateTouch={true} // Activa el soporte táctil para dispositivos móviles
      centerMode={true} // Muestra la diapositiva actual en el centro
      centerSlidePercentage={33} // Ajusta el porcentaje de ancho de la diapositiva central
    >
      {services.map((service, index) => (
        <div key={index} className="service-slide">
          <img src={service.icon} alt={service.title} />
          <p>{service.title}</p>
        </div>
      ))}
    </Carousel>
    </section>
  );
};

export default Services;
