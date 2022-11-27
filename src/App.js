import "./App.css";
import "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div class="container ">
        <div class="row justify-content-start">
          <div class="col">
            <h1> TODO LIST </h1>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row justify-content-start">
          <div class="col-6">
            <button type="button" class="btn btn-primary">
              Add Task
            </button>
          </div>
          <div class="col-4">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class= "row justify-content-center">
            <div class="content">
              <div class="col-12">
                no found todo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
