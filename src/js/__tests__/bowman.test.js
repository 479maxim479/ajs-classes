import Bowman from '../bowman';

test('Создание Bowman', () => {
  const hero = new Bowman('Bowman');
  expect(hero).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
