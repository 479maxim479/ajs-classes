import Swordsman from '../swordsman';

test('Создание Swordsman', () => {
  const hero = new Swordsman('Swordsman');
  expect(hero).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
