import { expect } from 'chai';
import { getNewId } from '@/store/utils';

describe('Store utils', () => {
    describe('getNewId()', () => {
        it('should return 0 by default', () => {
            expect(getNewId([])).eql(0);
        });

        it('should return max id value + 1', () => {
            const transcriptions = [{ id: 0 }, { id: 2 }, { id: 7 }];

            expect(getNewId(transcriptions)).eql(8);
        });
    });
});