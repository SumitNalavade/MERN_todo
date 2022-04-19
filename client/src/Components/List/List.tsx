import React from "react";
import { UseMutationResult } from "react-query";

import TodoInterface from "../../Utils/TodoInterface";
import ListComponent from "./ListComponent";

interface Props {
    todos: TodoInterface[]
    deleteMutation: UseMutationResult<TodoInterface[], unknown, TodoInterface, unknown>
}

const List: React.FC<Props> = ({ todos, deleteMutation }) => {
    return (
        <div>
            {todos.map((todo, index) => <ListComponent key={index} todo={todo} deleteMutation={deleteMutation} />)}
        </div>
    )
};

export default List;
