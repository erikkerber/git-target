export default class FeaturedAPI {
	
	requestFeatured() {
		var url = "https://redsky.target.com/v2/pages/featured-phone?floor=1&storeId=1375";
		return new Promise(function(resolve, reject) {
			fetch(url, {
				method: "get"
			})
			.then((res) => res.json())
			.then(function (featured) {
				resolve(featured)
			})
			.catch((err) => {
				reject(err)
			})
		});
	}
}