ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [47.251953, 39.764672],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    })
    myMap.geoObjects
        .add(new ymaps.Placemark([47.251953, 39.764672], {
            balloonContent: 'улица 1-й Конной Армии, 17Б'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'black'
        }))
}
