import { useState } from "react";
import { loginService } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import {
  useCustomSelector,
  useCustomDispatch,
} from "../../../store/hooks/index";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useCustomDispatch();
  const { auth } = useCustomSelector((state) => state);
  console.log(auth);
  const loginHandleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      event.preventDefault();
      const response = ({} = await loginService(username, password));
      if (response) {
        //dispatch(addUser({user: response.username, userId: response.id, userAdmin: response.admin}));
        setAccess(true);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginHandleSubmit}>Entrar</button>
      </form>
    </div>
  );
}
