const msw = require('./');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')

dayjs.extend(utc)

const now = dayjs().hour(12).utc()
const inAnHour = dayjs(now).add(2, 'hour')

const toUnix = date => dayjs(date).unix()

async function init() {
    try {
        const spots = await msw.getForecastBySpot(1294, toUnix(now), toUnix(inAnHour))
        console.log(JSON.stringify(spots))
    }
    catch(err) {
        console.log(err)
    }
}

init();