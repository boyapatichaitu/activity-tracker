# User Activity Tracker / Display

This is a buildable project that currently receives static data from [Activity mock](https://github.com/boyapatichaitu/activity-tracker/blob/master/src/Data/activity.js) and has been integrated with [react-big-calendar](https://github.com/jquense/react-big-calendar) to show complete activity timelines over a calendar.

## Installation

```
Open bash
git clone https://github.com/boyapatichaitu/activity-tracker.git
cd activity-tracker
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `node server.js`

Serves the production version of the app in [http://localhost:3000](http://localhost:3000)

Make sure to see that the `npm start` isn't running or the port `3000` causes issue.

To run both `Development` and `Production` copies parallely, go ahead and change the server port in [Server Js](https://github.com/boyapatichaitu/server.js) from `3000` to `any port` i.e., for instance `8080`