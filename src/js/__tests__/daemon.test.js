import Daemon from '../daemon';

test('Создание Daemon', () => {
  const hero = new Daemon('Daemon');
  expect(hero).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
