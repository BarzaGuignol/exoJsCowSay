const userInfo = require('./information');
//console.log(`Hi, my name is ${userInfo.name} from campus ${userInfo.campus}`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Coucou, je suis ${userInfo.name} du campus ${userInfo.campus}`,
    e : "ôô",
    T : "U "
}));