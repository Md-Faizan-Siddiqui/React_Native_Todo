import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Navigation from './src/Navigation';
import TodoState from './src/Context/Todo/TodoState';

const App = () => {
  return (
    <TodoState>
      <Navigation />
    </TodoState>
  );
};

export default App;
