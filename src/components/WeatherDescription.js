import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import { windDegreeToText } from '../helpers';
import 'moment/locale/vi'


import WeatherDescriptionItem from './WeatherDescriptionItem';

const WeatherDescription = ({ weather, temperature }) => {
  return (
    <div className="container">
      <div className="row list-group-flush flex-column flex-md-row justify-content-center border-bottom  border-dark">
        <WeatherDescriptionItem
          description={'BÌNH MINH'}
          value={moment.unix(weather.current.sunrise).format('HH:MM')}
        />
        <WeatherDescriptionItem
          description={'HOÀNG HÔN'}
          value={moment.unix(weather.current.sunset).format('HH:MM')}
        />
        <WeatherDescriptionItem
          description={'KHẢ NĂNG MƯA'}
          value={`${Math.round(weather.hourly[0].pop * 100)}%`}
        />
        <WeatherDescriptionItem description={'ĐỘ ẨM'} value={`${weather.current.humidity}%`} />
        <WeatherDescriptionItem
          description={'GIÓ'}
          value={`${Math.round(weather.current.wind_speed)} km/h`}
        />
      </div>
      <div className="row list-group-flush flex-column flex-md-row justify-content-center  border-bottom border-dark ">
        <WeatherDescriptionItem
          description={'CẢM NHẬN'}
          value={temperature(weather.current.feels_like)}
        />
        <WeatherDescriptionItem
          description={'LƯỢNG MƯA'}
          value={weather.daily[0].rain ? `${weather.daily[0].rain} cm` : '0%'}
        />
        <WeatherDescriptionItem
          description={'ÁP SUẤT'}
          value={`${weather.current.pressure} hPa`}
        />
        <WeatherDescriptionItem
          description={'TẦM NHÌN'}
          value={`${weather.current.visibility / 100} km`}
        />
        <WeatherDescriptionItem description={'CHỈ SỐ UV'} value={weather.current.uvi} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherDescription);