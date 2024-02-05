import {useState} from 'react';
import {Button, FormControl, Input, Spinner,} from '@chakra-ui/react';
import {useMutation} from '@apollo/client';
import {ADD_TODO, ALL_TODO} from '../apollo/todos';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [addTodo, {loading, error}] = useMutation(ADD_TODO, {
    // refetchQueries: [{
    //   query: ALL_TODO
    // }]
    update(cache, {data: {newTodo}}) {
      const {todos} = cache.readQuery({query: ALL_TODO});
      cache.writeQuery({
        query: ALL_TODO, data: {
          todos: [newTodo, ...todos]
        }
      });
    }
  });
  if (loading) {
    return <Spinner/>;
  }
  if (error) {
    return <h2>error</h2>;
  }

  const handleAddTodo = () => {
    if (text.trim().length) {
      addTodo({
        variables: {
          'title': text,
          'user_id': 3333,
          'completed': false
        }
      })
        .then(() => setText(''));
    }
  };

  const handleKey = (event) => {
    if (event.key === 'Enter') handleAddTodo();
  };

  return (
    <FormControl display={'flex'} mt={6}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKey}
      />
      <Button onClick={handleAddTodo}>Add todo</Button>
    </FormControl>
  );
};

export default AddTodo;
