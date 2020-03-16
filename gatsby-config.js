module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`
    /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
    {
      resolve: "gatsby-source-openweathermap",
      options: {
        apikey: "f5f0200ef275713c40b0eb848979d0c0",
        location: "Chicago",
        units: "imperial",
        type: "weather"
      }
    },

    {
      resolve: "gatsby-source-darksky",
      options: {
        key: "f5f0200ef275713c40b0eb848979d0c0",
        latitude: "43.03",
        longitude: "-87.74",
        exclude: ["minutely"]
      }
    }
  ]
};
