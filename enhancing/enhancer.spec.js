const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    describe('repair() method', () => {

        //tests for repair method
        it('should restore durability to 100', () => {

            const actual_repair_1 = enhancer.repair({
                name: 'item',
                durability: 50,
                enhancement: 20
            })

            const actual_repair_2 = enhancer.repair({
                name: 'item',
                durability: 0,
                enhancement: 15
            })

            expect(actual_repair_1.durability).toEqual(100);
            expect(actual_repair_2.durability).toEqual(100);
        });

        it('should increase enhancement by 1', () => {

            //case where enhancement is already 20
            const actual_succeed_1 = enhancer.succeed({
                name: 'item',
                durability: 100,
                enhancement: 20
            });

            expect(actual_succeed_1.enhancement).toEqual(20);

            //cases where enhancement is less than 20
            const actual_succeed_2 = enhancer.succeed({
                name: 'item',
                durability: 100,
                enhancement: 11
            });
            expect(actual_succeed_2.enhancement).toEqual(12);

            const actual_succeed_3 = enhancer.succeed({
                name: 'item',
                durability: 100,
                enhancement: 15
            });
            expect(actual_succeed_3.enhancement).toEqual(16);

            const actual_succeed_4 = enhancer.succeed({
                name: 'item',
                durability: 100,
                enhancement: 9
            });
            expect(actual_succeed_4.enhancement).toEqual(10);

        })

        it('should decrease the enhancement and durability', () => {

            //cases where enhancement is less than 15
            //where durability is more than 5
            const expected_1 = {
                name: 'item',
                durability: 95,
                enhancement: 14                
            }
            const actual_fail_1 = enhancer.fail({
                name: 'item',
                durability: 100,
                enhancement: 14
            })
            expect(actual_fail_1).toEqual(expected_1);

            //where durability is less than 5
            const expected_2 = {
                name: 'item',
                durability: 0,
                enhancement: 14               
            }
            const actual_fail_2 = enhancer.fail({
                name: 'item',
                durability: 4,
                enhancement: 14
            })
            expect(actual_fail_2).toEqual(expected_2);

            //where enhancement is 15 or 16
            //where durability is more than or equal to 10
            const expected_3 = {
                name: 'item',
                durability: 90,
                enhancement: 15                
            }
            const actual_fail_3 = enhancer.fail({
                name: 'item',
                durability: 100,
                enhancement: 15
            })
            expect(actual_fail_3).toEqual(expected_3);

            //where durability is less than 10
            const expected_4 = {
                name: 'item',
                durability: 0,
                enhancement: 16
            }
            const actual_fail_4 = enhancer.fail({
                name: 'item',
                durability: 8,
                enhancement: 16
            })
            expect(actual_fail_4).toEqual(expected_4);

            //where enhancement is more than 16
            //where durability is equal to or more than 10
            const expected_5 = {
                name: 'item',
                durability: 50,
                enhancement: 18 
            }
            const actual_fail_5 = enhancer.fail({
                name: 'item',
                durability: 60,
                enhancement: 19
            })
            expect(actual_fail_5).toEqual(expected_5);

            //where durability is less than 10
            const expected_6 = {
                name: 'item',
                durability: 0,
                enhancement: 19  
            }
            const actual_fail_6 = enhancer.fail({
                name: 'item',
                durability: 6,
                enhancement: 20
            })
            expect(actual_fail_6).toEqual(expected_6);
        })
    })
})
