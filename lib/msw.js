const axios = require('axios');

class Msw {
    constructor() {
        this.request = axios.create({
            baseURL: 'https://magicseaweed.com/api/4fa1b1a1cb45e3ade0ee1fe7560ff2ee',
            headers: {
                'X-MSW-API': '4fa1b1a1cb45e3ade0ee1fe7560ff2ee'
            }
        })
    }

    async findSpotByCoordinates({lat, lon}) {
        try {
            const spots = await this.request({
                method: 'GET',
                url: '/spot',
                params: {
                    lat: lat,
                    lon: lon,
                    limit: 20
                }
            })
            return spots.data
        }
        catch(err) {
            console.log("error with findSpotByCoordinates", err)
        }
    }

    async getSpot(spotId) {
        try {
            const spots = await this.request({
                method: 'GET',
                url: `/Spot/${spotId}`
            })
            return spots.data
        }
        catch(err) {
            console.log("error with getSpot", err)
        }
    }

    // unix timestamps
    async getTideBySpot(spotId, startDate, endDate) {
        try {
            const spots = await this.request({
                method: 'GET',
                url: `/tide`,
                params: {
                    units: 'eu',
                    spot_id: spotId,
                    start: startDate,
                    end: endDate
                }
            })
            return spots.data
        }
        catch(err) {
            console.log("error with getTideBySpot", err)
        }
    }

    // unix timestamps
    async getForecastBySpot(spotId, startDate = null, endDate = null) {
        try {
            const spots = await this.request({
                method: 'GET',
                url: `/forecast`,
                params: {
                    units: 'eu',
                    spot_id: spotId,
                    start: startDate,
                    end: endDate
                }
            })
            return spots.data
        }
        catch(err) {
            console.log("error with getTideBySpot", err)
        }
    }
}

module.exports = new Msw();