const sum = require('./app');

test('Adds 1 + 2 to equal 3', ()=>{
    console.log(process.env);

    expect(sum(1,2)).toBe(3);
});