import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = () => {
    const mapState = { center: [44.941883, 34.058330], zoom: 18 }; // Координаты и масштаб карты
    const markGeometry = [44.941883, 34.058330];

    return (
        <YMaps query={{apikey: '7c5e173a-adf5-4c78-bfc8-299877a77056'}}>
            <div>
                <Map state={mapState} width="100%" height="400px">
                    <Placemark geometry={markGeometry} />
                </Map>
            </div>
        </YMaps>
    );
};

export default MapComponent;
