import { useState } from "react";
import { Button, Text, TextInput, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { TodoInterface } from "../types/todo.types";
import React from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoInterface[]>([]);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const onSubmitHandler = () => {
    if (!todo.trim()) return;

    if (editTodoId) {
      setTodoList(
        todoList.map((listTodo) =>
          listTodo.id === editTodoId ? { ...listTodo, title: todo } : listTodo
        )
      );
      setEditTodoId(null);
    } else {
      const newTodo: TodoInterface = {
        id: Date.now(),
        title: todo,
        isComplete: false,
      };
      setTodoList([...todoList, newTodo]);
    }
    setTodo("");
  };

  const toggleComplete = (id: number) => {
    setTodoList(
      todoList.map((listTodo) =>
        listTodo.id === id
          ? { ...listTodo, isComplete: !listTodo.isComplete }
          : listTodo
      )
    );
  };

  const deleteTodo = (id: number) => {
    const todoComplete = todoList.find((todo) => todo.id === id);
    if (todoComplete?.isComplete == false) {
      return;
    }

    setTodoList(todoList.filter((listTodo) => listTodo.id !== id));
  };

  const editHandler = (id: number, title: string) => {
    const isComplete = todoList.find((listTodo) => listTodo.id === id);
    if (isComplete?.isComplete === true) {
      return;
    }
    setEditTodoId(id);
    setTodo(title);
  };

  const onCancelHandler = () => {
    setTodo("");
    setEditTodoId(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "#f5f5f5" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        TodoList
      </Text>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          placeholder="Todo Title"
          value={todo}
          onChangeText={setTodo}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            backgroundColor: "#fff",
            marginRight: 10,
          }}
        />
        <Button
          title={editTodoId ? "Simpan" : "Tambah"}
          onPress={onSubmitHandler}
          disabled={!todo.trim()}
        />
        {editTodoId && (
          <Button title="Cancel" onPress={() => onCancelHandler()} />
        )}
      </View>

      <View>
        {todoList.map((listTodo) => (
          <View
            key={listTodo.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              borderRadius: 8,
              marginBottom: 8,
              backgroundColor: "white",
            }}
          >
            <Switch
              value={listTodo.isComplete}
              onValueChange={() => toggleComplete(listTodo.id)}
            />
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontSize: 16,
                textDecorationLine: listTodo.isComplete
                  ? "line-through"
                  : "none",
                color: listTodo.isComplete ? "#888" : "#000",
              }}
            >
              {listTodo.title}
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <Button
                title="Hapus"
                onPress={() => deleteTodo(listTodo.id)}
                color="red"
              />
              <Button
                title="Edit"
                onPress={() => editHandler(listTodo.id, listTodo.title)}
                color="gray"
              />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
