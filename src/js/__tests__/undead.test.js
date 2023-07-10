import Undead from '../undead';

test('Создание Undead', () => {
  const hero = new Undead('Undead');
  expect(hero).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
