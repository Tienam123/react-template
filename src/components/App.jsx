export const App = () => {
  const students = [
    { name: 'Ivan', surname: 'Hohlov', phone: '+380683570017' },
    { name: 'Serhii', surname: 'Hohlov', phone: '+38068355470017' },
    { name: 'Andrii', surname: 'Hohlov', phone: '+38068351170017' },
    { name: 'Vladyslav', surname: 'Hohlov', phone: '+3806833212317' },
    { name: 'Oleg', surname: 'Hohlov', phone: '+38068351231237' },
    { name: 'Maryna', surname: 'Hohlov', phone: '+3806835712317' },
    { name: 'Denis', surname: 'Hohlov', phone: '+3806835745017' },
    { name: 'Polovec', surname: 'Hohlov', phone: '+380683570456017' },
    { name: 'Hryhoryan', surname: 'Hohlov', phone: '+380683570017' },
    { name: 'Stepan', surname: 'Hohlov', phone: '+380683570546017' },
    { name: 'Taras', surname: 'Hohlov', phone: '+380683575550017' },
    { name: 'Oleksandr', surname: 'Hohlov', phone: '+38068663570017' },
  ];
  return (
    <ul>
      {
        students.map( ( e, index ) => {
          return (
            <li key={index} className='list__item item'>
              <h2 className='item__title'
                  style={{ color: 'red', fontStyle: 'italic' }}>{e.name + ' ' + e.surname}</h2>
              <h2 className='item__tel'>Tel:{e.phone}</h2>
              <hr />
            </li>
          );
        } )}
    </ul>
  );
};
