import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() lngLat: number[];
  private map: mapboxgl.Map;
  private style = 'mapbox://styles/mapbox/streets-v11';
  lng = 19.999279;
  lat = 50.023316;

  constructor() { }

  ngOnInit() {
  
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoiYmFydGxvbWllamxlamEiLCJhIjoiY2swYjllaDByMHBydjNsbndleG15NWZraiJ9.9p3NhI42QUw-MhXKd_T_ZQ';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 18,
      pitch: 0,
      center: [this.lngLat[0], this.lngLat[1]],
      // antialias: true // create the gl context with MSAA antialiasing, so custom layers are antialiased
  });
  // Add map controls

    this.map.addControl(new mapboxgl.NavigationControl());

  this.map.on('load', () => {


    this.map.loadImage('assets/map-pin.png',
      // 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
   (error, image) => {
      if (error) throw error;
      this.map.addImage('pin', image);
      this.map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 
        {
             type: 'geojson',
            'data':
             {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [this.lngLat[0], this.lngLat[1]]
                    },
                    properties :null
                }
              ]
          }
        },
        'layout': {
          'icon-image': 'pin',
          'icon-size': 0.035
          }
      });
      }
      );
  }
  )

 
  }
}
