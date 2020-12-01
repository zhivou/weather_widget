import React from 'react';
import axios from "axios";
import spinner from './spinner.gif'

class GeoFindMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      mapLink: '',
      status: 'Idle',
      loading: false
    };
    this.handleFindMe = this.handleFindMe.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
  }

  handleFindMe() {
    if(!navigator.geolocation) {
      this.setState({ status: 'Geolocation is not supported by your browser' });
    } else {
      this.setState({ status: 'Locating…' });
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  }

  success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    this.setState({
      status: 'Located',
      latitude: latitude,
      longitude: longitude,
      mapLink: `https://www.openstreetmap.org/#map=18/${ latitude }/${ longitude }`
    });
    this.middleware_weather_ajax()
  }

  error() {
    this.setState({ status: 'Unable to retrieve your location' });
  }

  middleware_weather_ajax(){
    this.setState({ loading: true });
    const url = '/weather_report';
    axios.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');

    axios.post(url, {
      coordinates:{
        latitude: this.state.latitude,
        longitude: this.state.longitude
      }
    })
      .then( res => {
        console.log(`Map this prop up to Container ${res.data}`);
        this.setState({ loading: false });
        this.props.mapWeatherReport(res.data);
      })
      .catch( err => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render_simple_spinner() {
    if (this.state.loading) { return <img src={ spinner } alt="loading..." /> }
    if (!this.state.loading) { return 'Current Weather' }
  }

  render() {
    return (
      <button className="btn text-white btn-block" onClick={ this.handleFindMe }>{ this.render_simple_spinner() }</button>
    )
  }
}

export default GeoFindMe;
