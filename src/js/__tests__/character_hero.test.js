import Character from '../characters';

test('Существование персонажа', () => {
  expect(() => {
    const result = new Character('qwerty', 'Freak');
    return result;
  }).toThrow();
});
