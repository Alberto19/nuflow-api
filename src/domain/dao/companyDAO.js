'use strict'
let db = require('../../db/MongoConnection');
let q = require('q');
let CompanyModel = require('../model/companyModel');


class CompanyDAO{


    persist(company) {

		var defer = q.defer();
		db.Connect();
		let saveCompany = new CompanyModel({
            name: company.name,
            adress: company.adress,
            phone: company.phone,
            rating: company.rating,
            site: company.site,
            photos: company.photos,
            reviews: company.reviews,
            lat: company.lat, 
            lon: company.lon,
            mapsUrl: company.mapsUrl,
            days: company.days
		});
		saveCompany
			.save()
			.then((result) => {
				db.Close();
				defer.resolve(result);
			})
			.catch(err => {
				defer.reject(err);
				console.log('Erro: ', err);
			});
		return defer.promise;
	}


    
}

module.exports = new CompanyDAO();