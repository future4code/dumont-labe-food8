import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from '../routes/coordinator';

export default function useUnProtectedPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      goToHome(history);
    } 

  }, [history, token]);
}