import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAuthStore } from "../store/auth";
import { loginRequest } from "../services/auth";

type UsePasswordToggleReturnType = [boolean, () => void];

interface LoginForm {
  username: string;
  password: string;
}

interface InputTouched {
  username: boolean;
  password: boolean;
}

export const usePasswordToggle = (): UsePasswordToggleReturnType => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = (): void => {
    setIsPasswordVisible((prev) => !prev);
  };

  return [isPasswordVisible, togglePassword];
};

export const useLogin = () => {
  const [form, setForm] = useState<LoginForm>({ username: "", password: "" });
  const [inputTouched, setInputTouched] = useState<InputTouched>({ username: false, password: false });
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const setProfile = useAuthStore((state) => state.setProfile);
  const mutation = useMutation(loginRequest);

  const [isPasswordVisible, togglePassword] = usePasswordToggle();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputError = (input: string, touched: boolean): string => {
    if (!input && touched) {
      return "Este campo es requerido*";
    }
    return "";
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    setInputTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setInputTouched((prev) => ({ ...prev, ["username"]: true }));
    setInputTouched((prev) => ({ ...prev, ["password"]: true }));

    handleInputError(form.username, inputTouched.username);
    handleInputError(form.password, inputTouched.password);
    if (!form.username || !form.password) return;

    try {
      const username = form.username;
      const password = form.password;
      const resLogin = await mutation.mutateAsync({ username, password });
      if (resLogin.token) {
        setProfile(resLogin.token);
        navigate("/dashboard");
      }
    } catch (error: any) {
      setLoginError(error.message || "Inicio de sesión fallido");
    }
  };

  return {
    form,
    handleInputChange,
    handleOnBlur,
    handleInputError,
    loginError,
    inputTouched,
    handleSubmit,
    isPasswordVisible,
    togglePassword,
  };
};