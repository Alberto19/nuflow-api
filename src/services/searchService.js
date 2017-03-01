"use strict"
let requestP = require('request-promise');
let key = require('../../config').googleApiKey;
let googleTypes = require('../../config').googleTypes;
let q = require('q');

class searchService{

	pesquisa(location, radius, keyword){
		let defer = q.defer();	
		var generalresult = [];

		this.getplaces(location, radius, keyword)
		.then((data)=>{
			// var dados = JSON.parse(data);
			data.results.map(gPlace =>{
		
	var ref = gPlace.photos !== undefined ? gPlace.photos[0].photo_reference : null;

				generalresult.push({
				 name : gPlace.name,
				 place_id : gPlace.place_id,
				 reference : ref,
				 rating: gPlace.rating,
				 adress : gPlace.vicinity,
				 location: gPlace.geometry.location,

				});
			});
			defer.resolve(generalresult);
		})
		return defer.promise;
	}

	getplaces(location, radius, keyword){
		let defer = q.defer();
			// let options = {
			// 	uri:`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lon}
			// 	&radius=${radius}&types=${googleTypes}&keyword=${keyword}&language=pt-BR&key=${key}`,
			// 	resolveWithFullResponse: true
			// }

			// requestP.post(options).then((result)=>{
			// 	defer.resolve(result.body);
			// })
			// .catch((err)=>{
			// 	defer.reject(err);
			// });

			defer.resolve({
   "html_attributions" : [],
   "results" : [
      {
         "geometry" : {
            "location" : {
               "lat" : -23.5669632,
               "lng" : -46.84748339999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.5656338197085,
                  "lng" : -46.8460902697085
               },
               "southwest" : {
                  "lat" : -23.5683317802915,
                  "lng" : -46.8487882302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "8fc72d88ab35b6fcd0bf0e9034e5443306a0f596",
         "name" : "Cassimira Club",
         "place_id" : "ChIJ7fJZemsAz5QRkt5l7JYX4eY",
         "rating" : 5,
         "reference" : "CmRSAAAASxrjiZKD-cOAoOXrDD_WbVXpZcESlQ0tgynXAKB1-prZU6zHScbAgiQBAXtiz4KY6PVWIW5Fg4rxPyjzIwGl5BC5HK35OeDLC4GKnkvT9FogMwy_44JgyU7MBzjS-Yi2EhDeKIJkEtyYiMURDDpjVRgxGhQyk-Xqd9p4mQy50GN8v-ONoyWk8A",
         "scope" : "GOOGLE",
         "types" : [ "night_club", "point_of_interest", "establishment" ],
         "vicinity" : "Rua Belém, 20 - Carapicuíba, São Paulo"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.5061319,
               "lng" : -46.865845
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.5047229197085,
                  "lng" : -46.8645462197085
               },
               "southwest" : {
                  "lat" : -23.5074208802915,
                  "lng" : -46.8672441802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "259ba692348ea7010ace936573e413f4b5513e0e",
         "name" : "Nine",
         "photos" : [
            {
               "height" : 2160,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/110180160510529389655/photos\"\u003eMurilo Augusto\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAElqqJB7wWIBJVAb_PZ8U-FoQbLjV8BlDJPWxuFBrfDJaCnnxPSxd3E7uN0GavyGP0Sj_N7XHiWqiT1hYPGY0PN1ICts1TPtbT-wd3WRHi8yJF3TqAOqGS1WTGYbB7Td-GP4-kq26b1QWcYKF6ULI0gQe5orNdotWXsbE8QuZL14EhDOg76ZfKCs8t9LOv59JTVDGhS4HmHfmKK6hmtvSgejByaLqUS3Bg",
               "width" : 3840
            }
         ],
         "place_id" : "ChIJMe3n_NIDz5QRmFOF_7NkW-U",
         "rating" : 4.6,
         "reference" : "CmRSAAAAw-UUwcJHD1Kw_0berCntvJLr9fGDUkXAr5hfbffDA4ZAo289dIcH21_0W_YN8pTEVjuMgjB01O_e1SirK65uE4kkvbT88pHXD0hO1TCZsp5zZ6ywqH8em83eM1VEEY1gEhCZOm95AW8C3Kcc9_ABcppMGhQo7N6y7dClg2WWE45KFsrTWNffgw",
         "scope" : "GOOGLE",
         "types" : [ "night_club", "bar", "point_of_interest", "establishment" ],
         "vicinity" : "Avenida Trindade, 550 - Bethaville I"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.7082068,
               "lng" : -46.8741938
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.7068056697085,
                  "lng" : -46.87276891970851
               },
               "southwest" : {
                  "lat" : -23.7095036302915,
                  "lng" : -46.8754668802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "f1359c61cf2ec2334446c6cc3f12cec42c9c9ed1",
         "name" : "Rampas Choop & Show",
         "opening_hours" : {
            "exceptional_date" : [],
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3096,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/104482092660989696408/photos\"\u003eJR Vieira\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAH5v_1vwluYEctS8t4NxD5qeTCcUpD9L0SPyv1mEQYl_aMpY-V_CW9Gh-LfRyRZ7NZWCS8BvfGdcq8538Zeh8TYjPXnM8Yyj_BR3u15mQ6aIykhcR7ci_kFKSS0Sy84FVrXHOI1vWedIcyPgd1SSXfwTp7ZMqvlk02KmdrD1mQyhEhDQh9UWRU6XKtsBh1WUcPgWGhQYePVChSiTTk8JJWTCMhS0duJXig",
               "width" : 4128
            }
         ],
         "place_id" : "ChIJa6W7hfSsz5QRx7zkE3oxBQs",
         "rating" : 4.3,
         "reference" : "CmRRAAAACzK4iqqkKNU0nLUj8fBYVXno-2vto_HVfa0nA95bfZUOOMX1OAk_Igsz9-4WmgDl7zVWwbrWjshvQnCvRfCR4dZPWQHtN8Gg-2kK7izkRT_NrEFRCC4JEt-O3Z-RH4a8EhBwENpSMuMw6ZhmTh_MWqt_GhRjmu7UH-MVr2dCHrK6Q0CJ29QcIA",
         "scope" : "GOOGLE",
         "types" : [ "night_club", "point_of_interest", "establishment" ],
         "vicinity" : "Rodovia Régis Bittencourt, s/n - Potuvera, Itapecerica da Serra"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.5742892,
               "lng" : -46.84999730000001
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.57301661970849,
                  "lng" : -46.8487946697085
               },
               "southwest" : {
                  "lat" : -23.5757145802915,
                  "lng" : -46.8514926302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "1963c4e31b13c9af49f0ffc4f718e5336d8fe4c8",
         "name" : "Celeiro da Granja",
         "opening_hours" : {
            "exceptional_date" : [],
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 4032,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/111645127879696982509/photos\"\u003ejair morango\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAA2n2nOWYtjrUpb4re4ky5W-DSS9Kz6Hm1_iZEf5c9yY7B16_haochU81Pu6obAQpbDloa8pvXify0-jueC3hmRgracIovDfVgaCVwwCqkPa7ePv1qxx9B91vj1dcQFfDodYh98w9MdNQZ9XrjRBz0xNtxys7XE2coryn6akfVH1EhDn5Uaj0aQAhmqFwmuJ9CmyGhT9Z6_M9HEoRk811fQvlzVCE4mUHQ",
               "width" : 2268
            }
         ],
         "place_id" : "ChIJF4WzMAoAz5QRiMbTUzsKo0I",
         "rating" : 4.1,
         "reference" : "CmRRAAAAu7KTio9Pg0Z_uLRoM1_nve4pRHIbtwWN2Y7v_Zz15IOZxsUag5KctRch2Xk8yxrcjOmtPhs2bjVW0Udthyds7G4MVJK7sp1HWqbEg-6nxVc0tlsp6s9gUvT16pInlCS0EhBx7nsVOxb2V1vTd6PiOIpjGhQjCznzCM4TC7TwRDb-1jyCdN6VWw",
         "scope" : "GOOGLE",
         "types" : [ "night_club", "point_of_interest", "establishment" ],
         "vicinity" : "Avenida São Camilo, 2829 - Granja Viana, Cotia"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.6519195,
               "lng" : -46.84832780000001
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.6506070197085,
                  "lng" : -46.84687791970851
               },
               "southwest" : {
                  "lat" : -23.6533049802915,
                  "lng" : -46.8495758802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "dc5d4ecaf6c6b8520f1948a601b9b1ec1205504b",
         "name" : "Só Alegria",
         "photos" : [
            {
               "height" : 3920,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106306234345159311403/photos\"\u003eTiago Melo\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAGx6e7mOqt8D0ARvEsbAVHlWBfXpzgh4A2ctBVhL-OYEwWmUtDCWizFcMgL75wUWkD03oSxzQcNGr8adH4VLko170TLwmV40Vz2ctZq1UH3i1NgAyhNZ6nSkzFHvbJ7Bgfs9zZTns4dkOR68efLOEBayQl2kXAp6R0uDjxjSIxPZEhD2UQ-EQL7zq_-1QYB9nqu7GhQAyLaSty39veXS74jTEKQjXFfhqg",
               "width" : 2208
            }
         ],
         "place_id" : "ChIJ0UeYamarz5QRUYnVTvDKfLY",
         "rating" : 3.4,
         "reference" : "CmRSAAAAKUIztihTcUYQNIaoMo0lgKWMsR4QNn9uGxkXJ2U_Dz6poIxZow5DGNy6lSWECuPBLJ7q4_3spzN7JEFzDRfbg3Xj33uxHd7OLeoheSRZZ1ykLJ2PryFvruGLpPqTADDzEhBP7nvgQyC7b_pNI4iUg4StGhR0vlHH_ZosAk912zXexOcPBNfc3Q",
         "scope" : "GOOGLE",
         "types" : [ "night_club", "point_of_interest", "establishment" ],
         "vicinity" : "Rua Alexandre Kadnuc, 42 - Tingidor, Embu das Artes"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.523853,
               "lng" : -46.90782799999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.52237351970849,
                  "lng" : -46.9066234197085
               },
               "southwest" : {
                  "lat" : -23.5250714802915,
                  "lng" : -46.90932138029149
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "c214b46b7132120534fb4dd9629eac094c325b5a",
         "name" : "Arena Paiol",
         "opening_hours" : {
            "exceptional_date" : [],
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2340,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/109479313986586295996/photos\"\u003eFabio Carvalho\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAHuZMVtklcaxksQdXKaYKENbBugl_VhP0iMau5-pZgXMlXB_ZYW7asckWqpSgZxvdtgtjPfMAMf_szTWEG5xKNDw9TApLyu4CjnfteA5XU7DhPav0FqZLu3KUSEaZXmpEu1HoH5-cjriaK-fmFKtz43w1g7faUa5Cpur5QQNxQeYEhBAsCDA5-G8tnHMMT3FlYtbGhRZOXoJXzd02e49ghU-CYHK_EIATw",
               "width" : 4160
            }
         ],
         "place_id" : "ChIJ4RyB4QMEz5QRms75CIWmRyg",
         "rating" : 4,
         "reference" : "CmRRAAAAHuOlXXg7oI4gzfv4Kd-BQcKc4XkzofpS-DiVMLjE7pnUIvvEgIOeeIAny7qjKJ5LpoP5jkQ3Is4TOEBLz_UhG2SpcTFVR_fvyhshwouLNWfC2Bs73sBleUOePNdVJzN7EhAWuJTNWbgKd6qxrfor9tZ5GhTe_Qnu7pVKGm8bQs_tpcoW1y91ng",
         "scope" : "GOOGLE",
         "types" : [
            "restaurant",
            "night_club",
            "food",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "167, Rua José Albino Pereira - Jardim Alvorada, Jandira"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.6508855,
               "lng" : -46.8537528
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.6495689197085,
                  "lng" : -46.8523641197085
               },
               "southwest" : {
                  "lat" : -23.6522668802915,
                  "lng" : -46.8550620802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "347cbd4838d669d3b3980b6a90a6fd692e897f8d",
         "name" : "Chilli Rose",
         "photos" : [
            {
               "height" : 2448,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/107096382328374478141/photos\"\u003eDaniel Portillo Serrano\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAEkLt4O_Yz4YgLFDR_Vs1k7W8-xlM6LtvcH7zqWWNG3w_4wFeqzCbKSaBUmn3U028n3z1NQdKLMXwmg7DM-xE-LjZLtEx-6Y-vmbmhfFNbj6OiBbOEtIodrml8q07rUHbXEbVv6y6TPIUfFPQgfL-H55prsG16yOO9i2veampfhgEhAtMxNJgmrq7F8vG_1oXHewGhRITRqyTWi0J_Ii-A6XiMZemlLnTA",
               "width" : 3264
            }
         ],
         "place_id" : "ChIJHWwr22-rz5QRwadt7--R5b4",
         "rating" : 5,
         "reference" : "CmRSAAAA3i3fjkM-M8Y10ZP9yMfYEkv7uVN-mK7EWf7KeHevP8aXRI9xDu9nX224XJLYfOz3HBH7rxW96pKL1JZHGpUJl4ZdpoCsoOwPLzrCEzeTDYegy4O3_I0mxYc6Pd8ASlz_EhC9Q75aRGXUJEpV9TdsYpclGhShKZBtHqyIFH033zS81p-ra4fSFw",
         "scope" : "GOOGLE",
         "types" : [
            "meal_takeaway",
            "night_club",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "Rua da Matriz, 104 - Centro, Embu das Artes"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.6544058,
               "lng" : -46.8560768
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.6530872197085,
                  "lng" : -46.8547366697085
               },
               "southwest" : {
                  "lat" : -23.6557851802915,
                  "lng" : -46.8574346302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "55320e73bdfb159b8160a43f23367f18f7288f70",
         "name" : "Imperio Beer",
         "place_id" : "ChIJKSzsknqrz5QRl0PPqzGH_jU",
         "rating" : 4,
         "reference" : "CmRRAAAAb5BpUz8YE_giJB6VdgXj2PlbqXebiU12q5vwf3en1uRuGZxEtajVwP2UY1y31NH0ONjRnwERNX5aqoiU6H6rTt4E9O1NOXAihfi6J7Z_eAycrdxAL51YdujaN9jDuf7fEhCYyosXwNqLGaZjFrq5yLPlGhTsOn5JxE-gmi6LRBhiq3puVcXdzw",
         "scope" : "GOOGLE",
         "types" : [ "night_club", "point_of_interest", "establishment" ],
         "vicinity" : "Rua Vereador Jorge de Souza, 799 - Jardim Arabutan, Embu das Artes"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -23.5385848,
               "lng" : -46.93910899999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : -23.5372303197085,
                  "lng" : -46.9377584197085
               },
               "southwest" : {
                  "lat" : -23.5399282802915,
                  "lng" : -46.94045638029149
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "5a4fd649d4d250a25a6ac0ad5215ec2b1417890a",
         "name" : "NOVA VILA MIX",
         "photos" : [
            {
               "height" : 837,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/112115780423431438417/photos\"\u003ePedro Oliveira\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAHHwWXlkgTxt9sFBKxoH_DIkS3TfWIbK4-tyyt06lGqm4rk3GI5Sg4J1M_ClRDmfnxLsI254wGBiNNVhEyNef0nXhTxpaQC-EW2wz-GMD5pBkr8MMP-vUnzEiaqq2ot5kINRu7fFkxsWKC10Uzs7zPTCVbYyalHHXHKawAtR81hxEhDsTjYqJcgMLnSqxHcmOi0HGhRE63EHIdABbWxEpY6dDo_VaYR-3g",
               "width" : 2090
            }
         ],
         "place_id" : "ChIJ-3j91IEGz5QRB8GkxZv53dY",
         "rating" : 3.2,
         "reference" : "CmRSAAAALpn0G4BrKsGAk-kRFPibov-lGaT4oxxTV12p16GfS8MePFDMo808sXuOIzm--L1m8NmNvKQF56JzoUaabmXZ5xorVAAcEJ29aDQGkHOXW7_RSca96m4A7DQ8faUuVsWKEhBvak0yE2Gm6ohr5HxmXTvlGhS0XRRfht5689CvWvypIBGsYoJrqQ",
         "scope" : "GOOGLE",
         "types" : [ "night_club", "point_of_interest", "establishment" ],
         "vicinity" : "Rua Agostinho Ferreira Campos - Cidade da Saude, Itapevi"
      }
   ],
   "status" : "OK"
});

			return defer.promise;
	}

	getdetails(place_id){
	let defer = q.defer();
		let options = {
			uri:`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${key}`,
			resolveWithFullResponse: true
		}

		requestP.post(options).then((result)=>{
			defer.resolve(result.body);
		})
		.catch((err)=>{
			defer.reject(err);
		});
		return defer.promise;
	}

	getPhoto(reference){
	let defer = q.defer();
		let options = {
			uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${reference}&key=${key}`,
			resolveWithFullResponse: true
		}

		requestP.post(options).then((result)=>{
			defer.resolve(result.body);
		})
		.catch((err)=>{
			defer.reject(err);
		});
		return defer.promise;
	}
}
module.exports = new searchService();



