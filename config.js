var config = {
    style: 'mapbox://styles/raquelprz/cmfmhaizg009y01sdhav04thz',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicmFxdWVscHJ6IiwiYSI6ImNtZm1iZXVmZzAwN2cyaXF5Ymk4c3ljYXIifQ.9xoR3E9TDAPvmcadLOCTbw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Radiografía del turismo en La Palma',
    subtitle: ' Un paseo por los datos que conforman una visión actual del turismo en la isla bonita',
    byline: 'Raquel Pérez',
    footer: 'Fuente de los datos:datos.gob.es <br>  Creado con <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'La Palma',
            image: 'https://www.ilapalma.net/media/header/clima.webp',
            description: 'La Isla de La Palma es una de las más desconocidas del archipiélago canario. A raíz de la erupción del volcán de Tajogaite en 2021 su popularidad creció, aunque no lo hizo en la misma manera sus visitantes. Con un modelo turístico limitado, La Palma quiere huir de la masificación turística de islas como Tenerife o Gran Canaria.',
            location: {
                center: [-17.87456, 28.67825],
                zoom: 9.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Su modelo turístico',
            image: 'https://i.postimg.cc/k5wR0P8K/Plazas-seg-n-tipo-de-alojamiento.jpg',
            description: 'Según datos del Cabildo de La Palma, la isla cuenta con 605 viviendas de alquiler turístico registradas que suponen un total de 10.722 plazas. Existen varios tipos, como hoteles, alojamientos rurales o apartamentos, siendo estos últimos los que más plazas aportan al total de la isla.  Los Llanos de Aridane es el municipio con mayor cantidad de alojamientos (144) y, concretamente, de apartamentos turísticos (44). El más grande de la zona es Sol La Palma, del grupo Meliá. ',
            location: {
                center: [-17.90801, 28.58268],
                zoom: 16.75,
                pitch: 60,
                bearing:20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Un modelo en expansión',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/251249087.jpg?k=4fc3c3d1ba40590ddf00506fa37d23ef1038873c63b4281f8c92d0d15296915e&o=&hp=1',
            description: 'La Palma cuenta con cuatro hoteles de cuatro estrellas, entre los que destaca el Parador, situado en Breña Baja. Entre los meses de enero y abril de 2025 llegaron más de 70.000 turistas a la isla. Y durante el mes de julio la ocupación hotelera y extrahotelera total rozó el 66% del total. Unas cifras visiblemente más bajas que las de Tenerife, la isla favorita del archipiélago para los turistas.  ',
            location: {
                center: [-17.77488, 28.65138],
                zoom: 15,
                pitch: 40.01,
                bearing: 25.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Tenerife en cifras',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j5kBAZ2vfdunPgtwKaEca9rrq_LjVHBybQ&s',
            description: 'La ocupación en julio alcanzó el 82,6% y las cifras de alojamientos son visiblemente dispares. Tenerife tiene una superficie tres veces más grande que la isla de La Palma, pero cuenta con siete veces más alojamientos turísticos que la isla bonita. Mientras La Palma cuenta con 605 alojamientos, en Tenerife son 4.636. ',
            location: {
                center: [-16.55885, 28.28142],
                zoom: 8.75,
                pitch: 0,
                bearing: 4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
    {
      layer: 'alojamientos turisticos tenerife',
      opacity: 1
    }
  ],
            onChapterExit: [ {
      layer: 'alojamientos turisticos tenerife',
      opacity: 0
    }]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Arona, municipio clave',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYyZWx-djKPCi3MtLAUt8KzRvm1V36uurwFA&s',
            description: 'El municipio de Arona es el que más alojamientos turísticos aporta al total de la isla, con 830 alojamientos. Seguido de Adeje (532), Granadilla de Abona (459) y Santa Cruz de Tenerife (458). ). La zona de Los Cristianos es uno de los destinos turísticos más populares. ',
            location: {
                center: [-16.72077, 28.05176],
                zoom: 14,
                pitch: 35,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'La importancia de las conexiones aéreas',
            image: 'https://i.postimg.cc/j55nK3Q9/vuelos.png',
            description: 'Una de las claves para limitar el turismo en la isla bonita se encuentra su oferta de vuelos. Tomando como referencia el día 18 de septiembre de 2025, este día aterrizaron en la isla 39 vuelos, mientras que en Tenerife, sumando los datos de ambos aeropuertos, llegaron hasta la isla 235 aeronaves',
            location: {
                center: [-17.75531, 28.62535],
                zoom: 14,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'El papel del turismo',
            image: 'https://i.postimg.cc/0N9JXy69/Capacidad-tur-stica-por-municipios.png',
            description: 'A pesar de este modelo, hay poblaciones en las que el turismo juega un papel fundamental y cuyos datos son llamativos. El municipio de Breña Baja es el que más capacidad de plazas hoteleras y extrahoteleras contiene, aportando 3.604 plazas, casi un 34% de la cifra total. ',
            location: {
                center: [-17.77478, 28.64641],
                zoom: 12,
                pitch: 15,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'eighth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Breña Baja, capital del turismo',
            image: 'https://pro-static.h10hotels.com/gallery/T4D3/02_HTAHotelPool2.jpg',
            description: 'Este municipio cuenta, según datos del INE actualizados en 2024, con 6.112 habitantes, por lo que existe una plaza de alojamiento por cada dos habitantes, la cifra más alta de toda la isla. Además, cuenta también con el hotel más grande de toda la isla, el hotel H10 Taburiente Playa, con capacidad para 576 personas y situado en la Playa de los Cangajos. Por comparar, en Tenerife, por su parte, el Hotel Hard Rock, ubicado en Costa Adeje, cuenta con 624 habitaciones. ',
            location: {
                center: [-17.75810, 28.64911],
                zoom: 18
                ,
                pitch: 2,
                bearing: 3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                 {
            id: 'ninth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Un modelo sostenible',
            image: '',
            description: 'El modelo turístico de La Palma apuesta por la sostenibilidad y el respeto a sus habitantes. El reto actual se encuentra en, con los recursos existentes, mejorar la ocupación hotelera para que la economía local se pueda ver más beneficiada por el desembolso económico de un turismo que se adapta a la isla y no de una isla que se adapta al turismo. ',
            location: {
                center: [-17.85519, 28.68913],
                zoom: 10
                ,
                pitch: 2,
                bearing: 3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
