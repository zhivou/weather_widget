import React from 'react';

class GeoFindMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      mapLink: '',
      status: 'Idle'
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

  }

  error() {
    this.setState({ status: 'Unable to retrieve your location' });
  }

  render() {
    return (
      <button className="btn text-white btn-block" onClick={ this.handleFindMe }>Current Weather</button>
    )
  }
}

export default GeoFindMe;
