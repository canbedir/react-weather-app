import "../css/info.css";

const Info = ({ info, state }) => {
  return (
    <div className="container">
      {state ? 
        <div className="info">
          <p id="sehir">{info.name},{info.sys.country}</p>
          <div className="genelDeger">
            <p id="sicaklik">Sıcaklık: {info.main.temp}</p>
          </div>
          <p id="havaDurumu">Hava Durumu: {info.weather[0].description}</p>
          <div className="his">
            <p id="hissedilen">Hissedilen: {info.main.feels_like}</p>
          </div>
        </div>
       : null}
    </div>
  );
};

export default Info;
