import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { TodoInterface } from "../../../src/types/todo.types";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function TodoListScreen() {
  const [listTodo, setListTodo] = useState<TodoInterface[]>([]);
  const [isEdit, setIsEdit] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Omit<TodoInterface, "id">>({
    defaultValues: {
      title: "",
      isComplete: false,
    },
  });

  const onHandleSubmit = (values: Omit<TodoInterface, "id">) => {
    if (isEdit) {
      setListTodo((prev) =>
        prev.map((todo) =>
          todo.id === isEdit ? { ...todo, title: values.title } : todo
        )
      );
      setIsEdit(null);
    } else {
      const newTodo: TodoInterface = {
        id: Date.now().toString(),
        ...values,
      };
      console.log(newTodo);
      setListTodo((prev) => [...prev, newTodo]);
    }
    reset({
      title: "",
      isComplete: false,
    });
  };

  const onDeleteHandler = (id: string) => {
    setListTodo(listTodo.filter((todo) => todo.id !== id));
  };

  const editHandler = ({ id, title }: Omit<TodoInterface, "isComplete">) => {
    reset({
      title,
    });
    setIsEdit(id);
  };

  const onCancelHandler = () => {
    reset({
      title: "",
    });
    setIsEdit(null);
  };

  const onToggleHandler = ({ id }: Pick<TodoInterface, "id">) => {
    setListTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const confirmToggleHandler = ({
    id,
    isComplete,
  }: Pick<TodoInterface, "id" | "isComplete">) => {
    Alert.alert(
      "Confirm Toggle",
      `Mark todo as ${isComplete ? "incomplete" : "complete"} ?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => onToggleHandler({ id }),
        },
      ]
    );
  };

  const confirmDeleteHandler = (id: string) => {
    Alert.alert(
      "Delete Confirmations",
      "Are you sure want to delete this todo?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDeleteHandler(id),
        },
      ]
    );
  };

  return (
    <View className="flex-1 p-4">
      <View className="bg-white shadow-lg p-5 rounded-lg">
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Input Todo"
              className="border-b border-gray-400 rounded-lg p-2 mb-2"
            />
          )}
        />
        {errors.title && (
          <Text className="text-red-600">{errors.title.message}</Text>
        )}

        <View className={`${isEdit ? "flex-row justify-around" : ""}`}>
          {/* Button Save / Submit */}
          <Pressable
            onPress={handleSubmit(onHandleSubmit)}
            className={` ${
              isEdit
                ? "bg-green-600 py-2 px-12 rounded-lg"
                : "bg-blue-600 p-2 rounded-md mb-4 active:bg-blue-950"
            }`}
          >
            <Text className="text-white text-center font-bold">
              {isSubmitting ? "Submiting...." : isEdit ? "Save" : "Submit"}
            </Text>
          </Pressable>
          {/* Cancel button */}
          {isEdit && (
            <Pressable
              onPress={onCancelHandler}
              className=" px-12 py-2 bg-red-600 rounded-lg"
            >
              <Text className="text-white text-center font-bold">Cancel</Text>
            </Pressable>
          )}
        </View>
      </View>
      {/* List */}
      <FlatList
        data={listTodo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-1 items-center bg-white p-4 rounded-lg flex-row gap-x-2 justify-between shadow-lg">
            {/* Checkbox */}
            <View className="">
              <Checkbox
                value={item.isComplete}
                disabled={isEdit !== null}
                onValueChange={() => confirmToggleHandler(item)}
              />
            </View>
            <Text
              className={` flex-1
              ${item.isComplete ? "line-through text-gray-700" : "text-black"}
              `}
            >
              {item.title}
            </Text>
            {/* Edit button */}
            <Pressable
              disabled={isEdit !== null}
              onPress={() => editHandler(item)}
              className="bg-green-600 px-2 py-2 rounded-lg"
            >
              <Text className="text-white font-semibold">
                {isEdit == item.id ? "Editing..." : "Edit"}
              </Text>
            </Pressable>
            {/* Delete Button */}
            <Pressable
              disabled={isEdit !== null}
              onPress={() => confirmDeleteHandler(item.id)}
              className="bg-red-600 px-2 py-2 rounded-lg"
            >
              <Text className="text-white font-semibold">Delete</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
