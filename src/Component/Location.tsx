const Location: React.FC = () => {

  return (
    <section className="location" id="location">
      <h2 className="heading">
				Ubicaciones
			</h2>

      <div className="map-container">

        <div className="map-ST">
          <h1 className="map-title">Departamentos Santa Teresita</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1541.4359853723033!2d-60.42465473341008!3d-26.78250671234807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ2JzU2LjUiUyA2MMKwMjUnMjYuMSJX!5e0!3m2!1ses-419!2sar!4v1691462861737!5m2!1ses-419!2sar"
            width="450"
            height="325"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="map-SM">
          <h1 className="map-title">Departamentos Santa Monica</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d518.1213338724436!2d-60.42750517263315!3d-26.782223195020467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1691462245482!5m2!1ses-419!2sar"
            width="450"
            height="325"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </section>
  );
};


export default Location;

