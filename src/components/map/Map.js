/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import "./Map.css"
class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      marker: null
    };
  }

  componentDidMount() {
    // Tạo một đối tượng bản đồ mới
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 10.8498554, lng: 106.6438241 }, // Thay bằng vị trí chủ sở hữu
      zoom: 15
    });

    // Tạo đánh dấu vị trí của chủ sở hữu
    const ownerMarker = new window.google.maps.Marker({
      position: { lat: 10.8498554, lng: 106.6438241 }, // Thay bằng vị trí chủ sở hữu
      map: map,
      title: 'Linxi Bakery',
      animation: google.maps.Animation.DROP
    });

    // Lưu trữ đối tượng bản đồ và đánh dấu vị trí của chủ sở hữu vào state
    this.setState({
      map: map,
      marker: ownerMarker
    });

    // Lấy vị trí hiện tại của người dùng
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // Tạo đánh dấu vị trí của người dùng
        const userMarker = new window.google.maps.Marker({
          position: { lat: position.coords.latitude, lng: position.coords.longitude },
          map: map,
          title: 'Your Location',
          animation: google.maps.Animation.DROP
        });
        

        // Lưu trữ đánh dấu vị trí của người dùng vào state
        this.setState({
          marker: userMarker
        });

        // Đưa bản đồ tới vị trí của người dùng
        map.setCenter(userMarker.getPosition());
      });
    }
  }

  render() {
    return <div id="map" style={{ height: '500px' }}></div>;
  }
}

export default Map;