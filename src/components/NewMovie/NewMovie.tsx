import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

const defaultValues = {
  title: '',
  description: '',
  imgUrl: '',
  imdbUrl: '',
  imdbId: '',
};

type FormValues = typeof defaultValues;

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState<FormValues>(defaultValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd(values);
    setCount(count + 1);
  };

  const isValid =
    values.title.trim() &&
    values.imgUrl.trim() &&
    values.imdbUrl.trim() &&
    values.imdbId.trim();

  return (
    <form className="NewMovie" key={count} noValidate onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={values.title}
        onChange={newValue => setValues({ ...values, title: newValue })}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={values.description}
        onChange={newValue => setValues({ ...values, description: newValue })}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={values.imgUrl}
        onChange={newValue => setValues({ ...values, imgUrl: newValue })}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={values.imdbUrl}
        onChange={newValue => setValues({ ...values, imdbUrl: newValue })}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={values.imdbId}
        onChange={newValue => setValues({ ...values, imdbId: newValue })}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isValid}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
