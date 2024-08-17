import { useContext } from 'react';

import { BookListContext } from './BookListProvider';
import type { BookListUtils } from './types';

/**
 * useCart
 *
 * Public hook for using the previously fetched
 * shopping cart object, useful as a shorthand
 * to access the cart
 */
const useBookList = () => {
  return useContext(BookListContext) as BookListUtils;
};

export default useBookList;
