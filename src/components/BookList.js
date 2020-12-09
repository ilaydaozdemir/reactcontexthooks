import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Calıkusu</li>
        <li style={{ background: theme.ui }}>Toprak Ana</li>
        <li style={{ background: theme.ui }}>Gazap Üzümleri</li>
      </ul>
    </div>
  );
};

export default BookList;
