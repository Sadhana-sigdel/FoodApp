import { Stack } from 'expo-router';

const TaskLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="task/quiz"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="task/guess"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="task/paybill"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default TaskLayout;
