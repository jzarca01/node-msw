# node-msw

An API Wrapper for Magic Seaweed

## Installation

```shell
npm install node-msw
```

## Usage

```javascript
const msw = require('node-msw');
```

## Methods

### Find nearby spots by coordinates

```javascript
msw.findSpotByCoordinates({lat, lon})
```

### Get spot

```javascript
msw.getSpot(spotId)
```

### Get forecast by spot

```javascript
msw.getForecastBySpot(spotId, startDate, endDate)
/* unix timestamps
// future : 2 hours more minimum
// past : no minimum hours
*/
```

### Get tide by spot

```javascript
msw.getTideBySpot(spotId, startDate, endDate)
/* unix timestamps
// future : 2 hours more minimum
// past : no minimum hours
*/
```
