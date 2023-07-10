import Magician from '../magician';

test('Создание Magician', () => {
  const hero = new Magician('Magician');
  expect(hero).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
