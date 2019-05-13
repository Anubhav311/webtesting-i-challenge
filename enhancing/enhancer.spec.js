const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    describe('repair() method', () => {

        //tests for repair method
        it('should restore durability to 100', () => {
            const expected = {
                name: 'item_1',
                durability: 100,
                enhancement: 20
            };

            const actual_repair_1 = enhancer.repair({
                name: 'item_1',
                durability: 50,
                enhancement: 20
            })

            const actual_repair_2 = enhancer.repair({
                name: 'random',
                durability: 50,
                enhancement: 15
            })

            expect(expected.durability).toEqual(actual_repair_1.durability);
            expect(expected.durability).toEqual(actual_repair_2.durability);
        });

        it('should increase enhancement by 1', () => {

        })
    })
})
