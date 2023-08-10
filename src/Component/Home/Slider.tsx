import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import asd from "../../../public/slider/asd.jpg";
import asd1 from "../../../public/slider/asd1.jpg";
import asd2 from "../../../public/slider/asd2.webp";
import asd3 from "../../../public/slider/asd3.jpg";
import asd4 from "../../../public/slider/asd4.webp";
import asd5 from "../../../public/slider/asd5.jpg";


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
					<img src={asd} alt="ST1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={asd1} alt="SM1" />
				</SwiperSlide>
				<SwiperSlide>
				<img src={asd2} alt="ST2" />
				</SwiperSlide>
				<SwiperSlide>
				<img src={asd3} alt="SM2" />
				</SwiperSlide>
				<SwiperSlide>
				<img src={asd4} alt="ST3" />
				</SwiperSlide>
				<SwiperSlide>
				<img src={asd5} alt="SM3" />
				</SwiperSlide>
				
			</Swiper>
		</div>
	);
};

export default Slider;
