/* eslint-disable no-console */
import webpack from "webpack";
import webpackConfig from "../webpack.config.production";
import colors from "colors"; //eslint-disable-line no-unused-vars

process.env.NODE_ENV = "production"; //eslint-disable-line no-process-env

console.log("Generating minified bundle for production via Webpack.  This is going to take some time".blue);

webpack(webpackConfig).run((error, stats) => {
    if (error) {
        console.log(error.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(jsonStatsError => console.log(jsonStatsError.red));
    }

    if (jsonStats.hasWarnings) {
        return jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);
    console.log("The application was built to production specifications and written to the '/dist' folder".green);
    return 0;

});


