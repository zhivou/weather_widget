import React from 'react';
import GeoFindMe from "./GeoFindMe";
import { calcTime } from "./timeZoneCalc";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather_report: {
        name: '------------',
        weather: [{ main: '---' }],
        main: { temp: 0 },
        timezone: 0
      } };
    this.mapWeatherReport = this.mapWeatherReport.bind(this);
  }

  mapWeatherReport(report) {
    this.setState({ weather_report: report })
  }

  render() {
    return (
      <div>
        <div className="card bg-dark text-white">
          <div className="card-header">
            <h1>{ this.state.weather_report.name }</h1>
            <div>{ calcTime(this.state.weather_report.timezone) }</div>
          </div>
        </div>
        <div className="card-body border">
          <div className="text-center">
            <span className="display-1">{ parseInt(this.state.weather_report.main.temp) }°</span>
            <span className="h4">{ this.state.weather_report.weather[0].main }</span>
          </div>
        </div>
        <div className="card-foote bg-dark">
         <GeoFindMe mapWeatherReport={ this.mapWeatherReport } />
        </div>
      </div>
    );
  }
}

export default Container;
