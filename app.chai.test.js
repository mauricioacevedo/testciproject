const assert = require("chai").assert;
const sum = require('./app');

describe('Mocha test sum', ()=>{
    it('It should sum 1 + 2 = 3',()=>{
        console.log(process.env.URL_DB);
        console.log("DATABASE ENVIROTMENT VARIABLE"+process.env.URL_DB);
        const sum1=sum(1,2);
        assert.equal(sum1,3)
    })
})