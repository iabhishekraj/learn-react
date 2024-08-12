import Alert from "./Alert";
import ListGroup from "./ListGroup";

function App() {
  const todos = ["Learn React", "Create PRoject", "Develop App"];
  const cities = ["New Delhi", "Noida", "Patna", "Mumbai"];
  const onTodoSelection = (item: string) => {
    console.log("todo is ", item);
  };
  const onCitySelection = (item: string) => {
    console.log("city is ", item);
  };
  return (
    <div>
      <ListGroup
        items={todos}
        heading="Todo List"
        onHandleSelect={onTodoSelection}
      />
      <ListGroup
        items={cities}
        heading="City List"
        onHandleSelect={onCitySelection}
      />
      <Alert>
        This is alert content
        <br />
        <span className="abc">span content</span>
      </Alert>
    </div>
  );
}

export default App;
