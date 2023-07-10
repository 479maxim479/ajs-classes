import Zombie from '../zombie';

test('Создание Zombie', () => {
  const hero = new Zombie('Zombie');
  expect(hero).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
