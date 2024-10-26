import Bool "mo:base/Bool";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Map "mo:map/Map";
import { nhash } "mo:map/Map";

actor class Backend() {

  public type ToDo = {
    id : Nat;
    completed : Bool;
    todo : Text;
  };

  public type TodoId = Nat;

  var nextTodoId : Nat = 0;

  let todos = Map.new<Nat, ToDo>();

  public func addToDo(new : Text) : async (ToDo) {
    let newTodo : ToDo = {
      id = nextTodoId;
      completed = false;
      todo = new;
    };
    Map.set<Nat, ToDo>(todos, nhash, nextTodoId, newTodo);
    nextTodoId += 1;
    return newTodo;
  };

  public query func getToDos() : async ([ToDo]) {
    return Iter.toArray(Map.vals<Nat, ToDo>(todos));
  };

  public func changeStatus(id : Nat) : async (Text) {
    let oldTodo = Map.get<Nat, ToDo>(todos, nhash, id);
    switch (oldTodo) {
      case (?todo) {
        var toggle = todo.completed;
        toggle := if (toggle == true) false else true;

        let newTodo : ToDo = {
          id = id;
          completed = toggle;
          todo = todo.todo;
        };
        Map.set<Nat, ToDo>(todos, nhash, todo.id, newTodo);
      };
      case (null) {
        return " Todos With this Id Not Found";
      };
    };
    return " status changeded";
  };

  public func deleteToDo(id : Nat) : async (Text) {
    Map.delete<Nat, ToDo>(todos, nhash, id);
    return "Todo is Deleted";
  };

};
