import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play on the switch', key: '3' }
	]);

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter(todo => todo.key != key);
		})
	}

	const addTodoHandler = (text) => {
		if (text.length > 0) {
			setTodos((prevTodos) => {
				return [
					{
						text: text,
						key: Math.random().toString()
					},
					...prevTodos
				]
			})
		} else {
			Alert.alert('OOPS!', 'Text box cannot be empty', [
				{ text: 'Got it' }
			]);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					{/* to-do form */}
					<View style={styles.list}>
						<AddTodo addTodoHandler={addTodoHandler} />
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem
									item={item}
									pressHandler={pressHandler}
								/>
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1faee'
	},
	content: {
		flex: 1,
		padding: 40,
	},
	list: {
		flex: 1,
		marginTop: 20
	}
});
