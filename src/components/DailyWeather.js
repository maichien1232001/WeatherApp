import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


const DailyWeather = ({ weather, temperature }) => {
  const renderDaily = () => {
    return weather.map((day, index) => {
      if (index === 0) {
        return null;
      }
      return (
        <div
          key={day.dt}
          className="list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom"
        >
          <div className="col">
          <p className="mb-0">{moment.unix(day.dt).format('dddd').charAt(0).toUpperCase() + moment.unix(day.dt).format('dddd').slice(1)}</p>
          </div>
          <div className="col px-2 text-center">
            <img
              className="img-fluid weather-img"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
              alt={day.weather[0].description}
            />
          </div>
          <div className="col d-flex flex-row justify-content-center">
            {Math.round(day.pop * 100)}%
          </div>
          <div className="col d-flex flex-row justify-content-center">{day.humidity}%</div>
          <div className="col d-flex flex-row justify-content-center">
            <p className=" ml-2 mb-0">{temperature(day.temp.min)} </p>
          </div>
          <div className="col d-flex flex-row justify-content-center">
            <p className=" mb-0">{temperature(day.temp.max)}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="mb-4 list-group list-group-flush">
        <div className="list-group-item d-flex justify-content-center align-items-center row px-0 py-md-0 border-bottom text-center day-header">
          <div className="col text-left d-md-block d-lg-block d-xl-block text-muted">
            <p>Ngày</p>
          </div>
          <div className="col d-md-block d-lg-block d-xl-bloc text-muted"></div>
          <div className="col d-md-block d-lg-block d-xl-block text-muted">
            <p>Khả năng mưa</p>
          </div>
          <div className="col d-md-block d-lg-block d-xl-block text-muted">
            <p>Độ ẩm</p>
          </div>
          <div className="col text-right d-md-block d-lg-block d-xl-block text-muted">
            <p>Nhiệt độ thấp nhất</p>
          </div>
          <div className="col text-right d-md-block d-lg-block d-xl-block text-muted">
            <p>Nhiệt độ cao nhất</p>
          </div>
        </div>
        {renderDaily()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather.daily };
};

export default connect(mapStateToProps)(DailyWeather);