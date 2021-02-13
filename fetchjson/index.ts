import axios from 'axios';

const URL: string = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Response {
  data: Todo;
}

const print = (id: number, title: string, completed: boolean): void =>
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);

axios.get(URL).then((response: Response): void => {
  const {
    data: { id, title, completed },
  } = response;

  print(id, title, completed);
});
