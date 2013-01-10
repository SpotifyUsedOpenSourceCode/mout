define(['mout/array/map'], function (map) {

    describe('array/map()', function(){

        it('should return a new array with modified items', function () {
            var base = [1,2,3,4,5];
            var r = map(base, function(val, i){
                return val + i;
            });

            expect( r ).toEqual( [1, 3, 5, 7, 9] );
        });

        it('should loop even if array is sparse. see #64', function () {
            function toOne(val, i){ return 1; }

            var base = new Array(3);
            var r = map(base, toOne);

            // IMPORTANT
            // ---------
            // this behavior is different than native Array#map
            expect( r ).toEqual( [1, 1, 1] );

            base[5] = 'foo';

            r = map(base, toOne);
            expect( r ).toEqual( [1,1,1,1,1,1] );
        });

        it('should return empty array if target is undefined', function () {
            var result = map(null);
            expect( result ).toEqual( [] );
        });

    });

});
