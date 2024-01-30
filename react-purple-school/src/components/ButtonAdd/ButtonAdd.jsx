/* Default imports */

// Code...
import {ButtonAddStyled} from './ButtonAdd.styled.js';
import {FaPlus} from 'react-icons/fa';

const ButtonAdd = () => {
  return (
      <ButtonAddStyled href="/">
        <FaPlus/>
        <p>Новое воспоминание</p>
      </ButtonAddStyled>
  );
};

export default ButtonAdd;