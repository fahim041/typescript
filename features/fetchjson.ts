import axios from 'axios';

interface Todo {
    id: string,
    title: string,
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
    const todo = res.data as Todo;

    const ID = todo.id;
    const title = todo.title;

    console.log(`
        id: ${ID}
        title: ${title}
    `)
});