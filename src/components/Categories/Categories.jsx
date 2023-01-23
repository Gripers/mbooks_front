import { useDispatch } from 'react-redux';

import { filter, getBooks } from '../../store/reducers/booksSlice.js';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {[
          { id: 1, title: 'Сбросить фильтры', value: 'reset' },
          { id: 2, title: 'Математика', value: '63cba4142490ec08de19d4e3' },
          { id: 3, title: 'Химия', value: '63cba41a2490ec08de19d4e5' },
          { id: 4, title: 'Биология', value: '63c9834205881598d103dc31' },
        ].map((category) => (
          <li
            key={category.id}
            onClick={() => dispatch(filter({ id: category.value }))}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
