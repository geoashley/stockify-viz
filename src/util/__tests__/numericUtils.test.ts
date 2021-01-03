import { convertToRepresentation } from '../numericUtil';

test('should xxx', () => {
    const input: string = '1273053754229';
    const expected = '1.27 T'
    expect(convertToRepresentation(input)).toEqual(expected);
});

test('should xxx', () => {
    const input: string = '627292268077.00';
    const expected = '627.29 B'
    expect(convertToRepresentation(input)).toEqual(expected);
});

test('should xxx', () => {
    const input: string = '209992229';
    const expected = '209.99 M'
    expect(convertToRepresentation(input)).toEqual(expected);
});

test('should xxx', () => {
    const input: string = '209992';
    const expected = '209.99 K'
    expect(convertToRepresentation(input)).toEqual(expected);
});