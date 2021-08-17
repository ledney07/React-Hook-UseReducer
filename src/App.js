import { useReducer, useState } from "react";
import "./styles.css";
import   reducer from "./useReducer/useReducer";

const initialState = [
  { id: Date.now(), name: "Carltz", email: "ledney21@gmail.com" }
];


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };

  return (
    <div className="App">
      <form className="form" onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button>Add Contact !</button>
        </div>
      </form>

      <div>
        {state.map((contact) => {
          return (
            <div key={contact.id}>
              <h2>{contact.name}</h2>
              <p>{contact.email}</p>
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: contact.id } })
                }
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
