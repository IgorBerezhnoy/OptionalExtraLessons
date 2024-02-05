import {VStack} from '@chakra-ui/react';
import {Spinner} from '@chakra-ui/react';
import {useMutation, useQuery} from '@apollo/client';
import TodoItem from './TodoItem';
import TotalCount from './TotalCount';
import {ALL_TODO, REMOVE_TODO, UPDATE_TODO} from '../apollo/todos';

const TodoList = () => {
  const {loading, error, data} = useQuery(ALL_TODO);
  const [updateTodo, {}] = useMutation(UPDATE_TODO, {});
  const [removeTodo, {}] = useMutation(REMOVE_TODO, {
    update(cache, {data: {removeTodo}}) {
      cache.modify({
        fields: {
          allTodos(currenTodos = []) {
            return currenTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`);
          }
        }
      });
    }
  });
  if (loading) {
    return <Spinner/>;
  }
  if (error) {
    return <h2>Errror</h2>;
  }


  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
      </VStack>
      <TotalCount/>
    </>
  );
};

export default TodoList;
