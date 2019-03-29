const NormaliseAcn = require('..');

test('handles null', () => {
  expect(NormaliseAcn(null, null)).toBe(null);
});

test('handles null', () => {
  expect(NormaliseAcn(null, '1')).toBe(null);
});

test('handles null', () => {
  expect(NormaliseAcn('', null)).toBe('');
});

test('handles 1', () => {
  expect(NormaliseAcn('1', null)).toBe('1');
});

test('handles 3', () => {
  expect(NormaliseAcn('123', '1')).toBe('123 ');
});

test('handles 5', () => {
  expect(NormaliseAcn('12312', '123')).toBe('123 12');
});

test('handles 6', () => {
  expect(NormaliseAcn('123123', '1')).toBe('123 123 ');
});

test('handles 8', () => {
  expect(NormaliseAcn('12312311', '1')).toBe('123 123 11');
});

test('adds dashes', () => {
  expect(NormaliseAcn('616032092', '1')).toBe('616 032 092');
});
