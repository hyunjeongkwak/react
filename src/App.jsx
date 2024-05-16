import { useState } from 'react';
import './App.css';
import Todo from './component/Todo';
import DoneTodo from './component/DoneTodo';
import AddButton from './component/AddButton';

function App() {
  const inputAreaStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    backgroundColor: '#E2E2E2',
    height: '100px',
    borderRadius: '10px',
  };

  const fontStyle = {
    fontFamily: 'IBM Plex Sans KR',
    fontWeight: '600',
  };

  const inputStyle = {
    height: '30px',
    width: '230px',
    backgroundColor: '#',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
  };

  const sectionStyle = {
    marginTop: '50px',
  };

  const todoBoxListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '27px',
    margin: '30px 0px 40px 0px',
  };

  const [workingTodos, setWorkingTodos] = useState([
    {
      id: new Date().getTime(),
      title: '리액트 공부하기',
      content: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
  ]);

  const [doneTodos, setDoneTodos] = useState([
    {
      id: new Date().getTime() + 1,
      title: '리액트 공부하기',
      content: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // todo 추가
  const addTodoHandler = () => {
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      content: content,
      isDone: false,
    };

    setWorkingTodos([...workingTodos, newTodo]);

    // input 비우기
    setTitle('');
    setContent('');
  };

  // todo 삭제
  const deleteTodoHandler = (id, isDone) => {
    const updatedTodos = isDone
      ? doneTodos.filter((todo) => todo.id !== id)
      : workingTodos.filter((todo) => todo.id !== id);
    isDone ? setDoneTodos(updatedTodos) : setWorkingTodos(updatedTodos);
  };
  // todo 완료/취소 토글
  const toggleTodoHandler = (id) => {
    const toggledTodo = workingTodos.find((todo) => todo.id === id) || doneTodos.find((todo) => todo.id === id);

    if (toggledTodo) {
      toggledTodo.isDone = !toggledTodo.isDone;

      if (toggledTodo.isDone) {
        setDoneTodos([...doneTodos, toggledTodo]);
        setWorkingTodos(workingTodos.filter((todo) => todo.id !== id));
      } else {
        setWorkingTodos([...workingTodos, toggledTodo]);
        setDoneTodos(doneTodos.filter((todo) => todo.id !== id));
      }
    }
  };
  return (
    <>
      <header style={{}}>
        <h3>My Todo List</h3>
      </header>
      <nav className="inputArea" style={inputAreaStyle}>
        <h4 style={fontStyle}>제목</h4>
        <input
          type="text"
          value={title}
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={inputStyle}
        />
        <h4 style={fontStyle}>내용</h4>
        <input
          type="text"
          value={content}
          // 인풋 이벤트로 들어온 입력 값을 content의 값으로 업데이트
          onChange={(e) => {
            setContent(e.target.value);
          }}
          style={inputStyle}
        />
        <AddButton blue="#6287D9" onClick={addTodoHandler}>
          <div style={fontStyle}>추가하기</div>
        </AddButton>
      </nav>
      <section style={sectionStyle}>
        <h4>Working</h4>
        <div style={todoBoxListStyle}>
          {workingTodos.map((todo) => (
            <div key={todo.id}>
              <Todo todo={todo} deleteTodoHandler={deleteTodoHandler} toggleTodoHandler={toggleTodoHandler} />
            </div>
          ))}
        </div>
      </section>
      <section style={sectionStyle}>
        <h4>Done</h4>
        <div style={todoBoxListStyle}>
          {doneTodos.map((todo) => (
            <div key={todo.id}>
              <DoneTodo todo={todo} deleteTodoHandler={deleteTodoHandler} toggleTodoHandler={toggleTodoHandler} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
