import Button from './Button';

const DoneTodo = ({ todo, deleteTodoHandler, toggleTodoHandler }) => {
  const todoBoxStyle = {
    width: '240px',
    height: '150px',
    backgroundColor: '#E2E2E2',
    borderRadius: '12px',
    padding: '30px 20px 20px 20px',
    flexDirection: 'column',
  };

  const titleStyle = {
    fontFamily: 'IBM Plex Sans KR',
    fontSize: '19px',
    marginBottom: '20px',
    fontWeight: '500',
  };

  const contentStyle = {
    fontFamily: 'IBM Plex Sans KR',
  };

  const { title, content, id, isDone } = todo;

  return (
    <div style={todoBoxStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={contentStyle}>{content}</div>
      <div>
        <Button blue="#6287D9" onClick={() => deleteTodoHandler(id, isDone)}>
          삭제하기
        </Button>
        <Button onClick={() => toggleTodoHandler(id)} blue="#6287D9">
          취소
        </Button>
      </div>
    </div>
  );
};

export default DoneTodo;
