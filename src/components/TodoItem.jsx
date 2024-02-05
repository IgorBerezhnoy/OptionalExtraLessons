import {Checkbox, CloseButton, HStack, Text} from '@chakra-ui/react';

const TodoItem = ({id, title, completed, updateTodo, removeTodo}) => {

  return (
    <HStack spacing={3}>
      <Checkbox onChange={e => updateTodo({
        variables: {
          id,
          completed: e.target.checked
        }
      })}
                isChecked={completed}
      />
      <Text>{title}</Text>
      <CloseButton onClick={() => removeTodo({variables: {id}})}/>
    </HStack>
  );
};

export default TodoItem;