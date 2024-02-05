import {gql} from '@apollo/client';

export const ALL_TODO = gql`
    query AllTodos {
        todos:allTodos{
            title
            id
            completed
        }
    } `;
export const ADD_TODO = gql`
    mutation AddTodo(
        $title: String!
        $user_id: ID!
        $completed: Boolean!){
        newTodo:createTodo(title:$title,user_id:$user_id, completed:$completed){
            title
            id
            completed
        }
    } `;
export const UPDATE_TODO = gql`
    mutation UpdateTdo($id: ID!,
        $title: String,
        $user_id: ID,
        $completed: Boolean){
        updateTodo(id:$id,title:$title, user_id:$user_id, completed:$completed){
            id,title,completed
        }
    } `;
export const REMOVE_TODO = gql`
    mutation RemoveTodo($id: ID!){
        removeTodo(id:$id){
            id
        }
    } `;