const msw = require('./');
const dayjs = require('dayjs');

const now = dayjs()
const inAnHour = dayjs().add(2, 'hour') // add : 2 hours minimum // substract : no minimum hours

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