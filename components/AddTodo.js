import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTodo({ addTodoHandler }) {
	const [text, setText] = useState('');

	const changeHandler = (val) => {
		setText(val);
	}

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder='Add new task..'
				onChangeText={changeHandler}
			// same as (val) => changeHandler(val)

			/>
			<Button
				title='Add todo'
				color='#7209b7'
				onPress={() => addTodoHandler(text)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 15,
		paddingVertical: 6,
		borderWidth: 1,
		borderColor: '#ddd'
	}
});