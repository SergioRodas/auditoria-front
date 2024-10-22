import React from "react";
import {LoginContainer} from "./styles/login.styled.ts";
import {useLogin} from "../../hooks/useLogin.tsx";
import Eye from "../../assets/icons/Eye.tsx";
import EyeOff from "../../assets/icons/Eye-off.tsx";

function Login() {
    const {
        form,
        handleInputChange,
        handleOnBlur,
        inputTouched,
        handleInputError,
        loginError,
        handleSubmit,
        isPasswordVisible,
        togglePassword,
    } = useLogin();

    return (
        <LoginContainer>
            <div className="login-form-container">
                <h1 className="login-title">Auditoría Mediática</h1>
                <h2 className="login-subtitle">
                    Bienvenido de vuelta, por favor, ingresa a tu cuenta.
                </h2>
                <form onSubmit={handleSubmit} className="login-form" noValidate>
                    <div className="form-group">
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Ingresa tu usuario"
                            required
                            value={form.username}
                            onChange={handleInputChange}
                            onBlur={handleOnBlur}
                        />
                        <span id="username-error" className="input-error-message">
              {handleInputError(form.username, inputTouched.username)}
            </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <div className="password-input">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Ingresa tu contraseña"
                                required
                                value={form.password}
                                onChange={handleInputChange}
                                onBlur={handleOnBlur}
                            />
                            <div className="password-toggle-icon">
                                {isPasswordVisible ?

                                    <Eye width={"24px"} height={"24px"} fill={"none"} onClick={togglePassword}/>
                                    :
                                    <EyeOff width={"24px"} height={"24px"} fill={"none"} onClick={togglePassword}/>
                                }
                            </div>
                        </div>
                        <span id="password-error" className="input-error-message">
              {handleInputError(form.password, inputTouched.password)}
            </span>
                    </div>
                    <div className="forgot-password">
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                    <button type="submit" className="btn-login">
                        Ingresar
                    </button>
                    {loginError && (
                        <div className="login-error-message">{loginError}</div>
                    )}
                </form>
            </div>
            <div className="login-images-container"></div>
        </LoginContainer>
    );
}

export default Login;
