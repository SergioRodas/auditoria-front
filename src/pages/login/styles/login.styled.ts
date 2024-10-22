import styled from "styled-components";
import { colors } from "../../../styles/colors.ts"

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto 38px;
    background-color: ${colors.primaryColor};
    color: ${colors.secondaryColor};
    font-family: Poppins, sans-serif;
    font-weight: 400;

    .login-form-container {
        padding-top: 20px;
        flex: 1;

        .login-title {
            font-weight: 500;
            font-size: 28px;
        }

        .login-subtitle {
            font-weight: 400;
            font-size: 18px;
        }

        .login-form {
            margin-top: 60px;

            label {
                font-weight: 500;
                font-size: 16px;
                display: block;
            }

            .form-group {
                margin-top: 20px;
            }

            input {
                width: 300px;
                height: 25px;
                border: none;
                border-bottom: 1px solid ${colors.inputBorderColor};
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 16px;
                background-color: ${colors.primaryColor};
                color: #00000066;
            }

            input::placeholder {
                font-weight: 400;
                font-size: 16px;
            }

            input:focus {
                outline: none;
            }

            .password-input {
                position: relative;
                width: fit-content;
            }

            .password-toggle-icon {
                position: absolute;
                top: 45%;
                right: 5px;
                transform: translateY(-50%);
                cursor: pointer;
            }

            .forgot-password {
                margin-top: 20px;

                a {
                    color: ${colors.secondaryColor};
                    font-weight: 400;
                    font-size: 14px;
                }
            }

            .btn-login {
                width: 300px;
                height: 36px;
                margin-top: 40px;
                background-color: #660033;
                font-family: 'Poppins';
                font-weight: 700;
                font-size: 16px;
                color: ${colors.primaryColor};
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            .input-error-message {
                display: block;
                height: 13px;
                color: ${colors.red};
                font-weight: 400;
                font-size: 10px;
            }

            .login-error-message {
                display: block;
                text-align: center;
                margin-top: 10px;
                height: 13px;
                color: ${colors.red};
                font-weight: 400;
                max-width: 300px;
                font-size: 11px;
            }
        }
    }

    .login-images-container {
        flex: 1;
    }

`;
