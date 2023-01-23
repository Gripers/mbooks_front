import { useEffect } from 'react';
import styles from './Books.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CircularProgress } from '@mui/joy';

import { getBooksApi } from '../../store/reducers/booksSlice.js';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Books = () => {
  const dispatch = useDispatch();
  const { books, filteredBooks, isLoading } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    dispatch(getBooksApi());
  }, []);

  const array = filteredBooks?.length > 0 ? filteredBooks : books;

  return (
    <div className={styles.books__wrapper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        array?.map((book) => (
          <div key={book._id}>
            <LazyLoadImage src={book.preview} alt='' effect='blur' />
            <div className={styles.title}>
              <a href={book.file} target='_blank'>
                {book.name}
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;
