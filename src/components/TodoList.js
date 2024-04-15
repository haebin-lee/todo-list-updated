import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList(){
    return <TodoListBlock>
        <TodoItem text="Create a project" done={true}/>
        <TodoItem text="Apply styling components" done={true}/>
        <TodoItem text="Create a context" done={false}/>
        <TodoItem text="Implment functions" done={false}/>
    </TodoListBlock>
}

export default TodoList;