//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { json } = require('body-parser');
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');


// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  let  countries = await axios.get("https://restcountries.eu/rest/v2/all");
  let modelCountry =countries.data.map((country)=>{
    return{
            Id:country.alpha3Code,
            Name:country.name,
            Img:country.flag,
            Region:country.region,
            Capital:country.capital,
            Subregion:country.subregion,
            Area:country.area,
            Population:country.population
    }
  })
 await Country.bulkCreate(modelCountry);
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
