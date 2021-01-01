import { convertToRepresentation } from '../numericUtil';

test('should xxx', () => {
    const input: string = '2099922299922';
    const expected = '21.00 T'
    expect(convertToRepresentation(input)).toEqual(expected);
});

test('should xxx', () => {
    const input: string = '20999222999';
    const expected = '21.00 B'
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