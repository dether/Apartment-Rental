import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SM from "../../../public/SM/SM.png";
import ST from "../../../public/ST/ST.png";
import deptos from "../../../public/deptos.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Instalar los componentes necesarios para el Swiper
SwiperCore.use([Pagination, Navigation, Autoplay]);

const Slider: React.FC = () => {
	return (
		<div className="slider-container" id="slider">
			<Swiper
				pagination={{
					type: "progressbar",
				}}
				navigation={true}
				className="mySwiper"
				autoplay={{ delay: 2000, disableOnInteraction: false }}
			>
				<div className="slider-content">
					<div className="slider-content-inner">
						<h1>Departamentos Vargas</h1>
						<p>Departamentos Disponibles: Si/No</p>
					</div>
				</div>
				<SwiperSlide>
					<img src={ST} alt="ST" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={SM} alt="SM" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={deptos} alt="deptos" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
