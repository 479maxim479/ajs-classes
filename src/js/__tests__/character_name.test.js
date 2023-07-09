import Character from '../characters';

test('Наличие цифр в имени персонажа', () => {
  expect(() => {
    return new Character(666, 'Zombie');
    
  }).toThrowError('Имя не должно содержать цифр');
});

test('Количество символов в имени персонажа', () => {
  expect(() => {
    return new Character('c', 'Undead');
  }).toThrowError('Имя героя должно содержать от 2 до 10 символов');
});

test('Проверка доступности персонажа', () => {
  expect(() => {
    return new Character('Batman', 'Robocop');
  
  }).toThrowError('Выберите одного из доступных : Boweman, Daemon, Magician, Swordsman, Undead, Zombie');
});
