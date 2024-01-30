/* Default imports */

// Code...
import {StyledForm} from './JournalForm.styled.js';
import {useState} from 'react';

const JournalForm = ({
                       addPost,
                     }) => {
  const [dateValue, setDateValue] = useState('2022-11-05');
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: titleValue,
      text: textValue,
      date: dateValue,
    };
    addPost(data);
    e.target.reset();
  };
  return (
      <StyledForm>
        <form action=""
              onSubmit={onFormSubmit}>
          <h2>Создать пост</h2>
          <input type="date"
                 onChange={(e) => setDateValue(e.target.value)}
                 name="date"
                 required
          />
          <input type="text"
                 required
                 onChange={(e) => setTitleValue(e.target.value)}
                 name="title"
          />
          <textarea name="text"
                    required
                    onChange={(e) => setTextValue(e.target.value)}
                    cols="30"
                    rows="10"></textarea>
          <button type="submit">Сохранить</button>
        </form>
      </StyledForm>
  );
};

export default JournalForm;