const Location: React.FC = () => {
	return (
		<section className="location" id="location">
			<h2>Ubicaciones</h2>

			<div className="map-container">
				<div className="map-ST">
					<h1 className="map-title">Departamentos Santa Teresita</h1>
					<div className="iframe-container">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.4531005630819!2d-60.42749823889236!3d-26.78224922675508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412d11169108f7%3A0x62a632a76bc4ef04!2sF.%20Canteros%201420%2C%20S%C3%A1enz%20Pe%C3%B1a%2C%20Chaco%2C%20Argentina!5e0!3m2!1ses!2sus!4v1691638684023!5m2!1ses!2sus"
							width="600"
							height="450"
							style={{ border: "0" }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>

				<div className="map-SM">
					<h1 className="map-title">Departamentos Santa Monica</h1>
					<div className="iframe-container">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.4702888974131!2d-60.41547123044339!3d-26.780057998545388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412d6c0c48d81d%3A0x916c9ec8cf289285!2sLeandro%20N.%20Alem%201160%2C%20S%C3%A1enz%20Pe%C3%B1a%2C%20Chaco%2C%20Argentina!5e0!3m2!1ses!2sus!4v1691638835732!5m2!1ses!2sus"
							width="600"
							height="450"
							style={{ border: "0" }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Location;
