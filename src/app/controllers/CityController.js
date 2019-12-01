import fs from 'fs';

class CityController {
    async index(req, res) {
        const citiesRawData = fs.readFileSync('city_list.json');
        const cities = JSON.parse(citiesRawData);

        return res.json(cities);
    }
}

export default new CityController();
