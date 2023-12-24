import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const id = import.meta.env.VITE_ID;
const service = import.meta.env.VITE_SERVICE;
const template = import.meta.env.VITE_TEMPLATE;

emailjs.init(id);

interface FormErrors {
	fullName: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isButtonDisabled, setButtonDisabled] = useState(true);
	const [errors, setErrors] = useState<FormErrors>({
		fullName: "",
		email: "",
		message: "",
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (form.current) {
			const formElements = Array.from(
				form.current.elements
			) as HTMLInputElement[];

			// Creamos un objeto temporal para almacenar los errores
			let tempErrors: FormErrors = {
				fullName: "",
				email: "",
				message: "",
			};

			// Validar cada campo y almacenar los errores en el objeto temporal
			formElements.forEach((element) => {
				if (element.name === "from_name" && element.value.trim() === "") {
					tempErrors.fullName = "Agrega un nombre";
				}
				if (element.name === "user_email") {
					const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					if (element.value.trim() === "") {
						tempErrors.email = "Agrega una dirección de email";
					} else if (!emailRegex.test(element.value)) {
						tempErrors.email = "Dirección de email inválido";
					}
				}
				if (element.name === "mensaje") {
					if (element.value.trim() === "") {
						tempErrors.message = "Agrega un mensaje";
					} else if (element.value.length > 100) {
						tempErrors.message =
							"El mensaje no debe superar los 100 caracteres";
					}
				}
			});

			// Actualizamos el estado con todos los errores al final de la validación
			setErrors(tempErrors);

			// Verificamos si hay algún error para detener el envío del formulario
			const hasErrors = Object.values(tempErrors).some((error) => error !== "");
			if (hasErrors) {
				return;
			}

			handleFormSubmit();
		}
	};

	const handleFormSubmit = () => {
		if (form.current) {
			emailjs
				.sendForm(service, template, form.current, id)
				.then((result) => {
					Swal.fire({
						position: "center",
						icon: "success",
						iconColor: "#00ff00",
						title: "¡Mensaje enviado con éxito!",
						showConfirmButton: false,
						timer: 2500,
						customClass: {
							popup: "swal-custom-style",
						},
					});
					console.log(result.text);
				})
				.catch((error) => {
					console.error("Error al enviar mensaje:", error);
					Swal.fire({
						position: "center",
						icon: "error",
						iconColor: "var(--main-color)",
						title: "Error, no se pudo enviar el mensaje.",
						showConfirmButton: false,
						timer: 2500,
						customClass: {
							popup: "swal-custom-style",
						},
					});
					console.log(error.text);
				});
			form.current.reset();
		}
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = event.target.name;
		const value = event.target.value;

		switch (name) {
			case "from_name":
				setErrors((prevErrors) => ({
					...prevErrors,
					fullName: value.trim() === "" ? "Agrega un nombre" : "",
				}));
				break;

			case "user_email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				setErrors((prevErrors) => ({
					...prevErrors,
					email:
						value.trim() === ""
							? "Agrega una dirección de email"
							: emailRegex.test(value)
							? ""
							: "Dirección de email inválido",
				}));
				break;

			case "mensaje":
				setErrors((prevErrors) => ({
					...prevErrors,
					message:
						value.trim() === ""
							? "Agrega un mensaje"
							: value.length > 100
							? "El mensaje no debe superar los 100 caracteres"
							: "",
				}));
				break;

			default:
				break;
		}
	};

	// Habilitar el botón si todos los campos están completos y sin errores de validación
	React.useEffect(() => {
		const hasErrors = Object.values(errors).some((error) => error !== "");
		setButtonDisabled(hasErrors);
	}, [errors]);

	return (
		<section className="contact" id="contact">
      <h2>Contacto</h2>
      <p>Contactate con nosotros! Estaremos encantados de responderte</p>
      {/* <div className="lineal">
        <img src={location2} alt="location" />
        <p> Calle 31 entre 2 y 4 Barrio Obrero</p>
      </div>
      <div className="lineal">
        <img src={phone} alt="phone" />
        <p> 3644 270614 </p>
      </div>
      <div className="lineal">
        <img src={gmail} alt="gmail" />
        <p> dether2011@gmail.com</p>
      </div> */}
			<div className="contact-container">
				<div className="form-container">
					<h2>Enviame un mensaje</h2>
					<form
						ref={form}
						action="#"
						onSubmit={handleSubmit}
						className="contact-form"
					>
						
							<input
								type="text"
								placeholder="Nombre completo"
								name="from_name"
								id="fullName"
								onChange={handleChange}
							/>
							{errors.fullName && (
								<span className="error-message">{errors.fullName}</span>
							)}
						

						
							<input
								type="email"
								placeholder="Dirección de email"
								name="user_email"
								id="email"
								onChange={handleChange}
							/>

							{errors.email && (
								<span className="error-message">{errors.email}</span>
							)}
						

						
							<textarea
								name="mensaje"
								id="message"
								cols={30}
								rows={10}
								placeholder="Tu mensaje"
								onChange={handleChange}
							/>
							{errors.message && (
								<span className="error-message">{errors.message}</span>
							)}
						

						<button
							type="submit"
							className={`btn ${isButtonDisabled ? "btn-disabled" : "active"}`}
							disabled={isButtonDisabled}
						>
							Enviar email
						</button>
					</form>
				</div>

				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.613298019723!2d-60.4237768363339!3d-26.78223756044324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412d8d878ed4fd%3A0xc69e345eb17ead57!2sAlegon!5e0!3m2!1ses-419!2sar!4v1692121142434!5m2!1ses-419!2sar"
						style={{ border: 0 }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Contact;
