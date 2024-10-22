import styled from "styled-components";
import {colors} from "../../styles/colors.ts";

export const NavbarComponent = styled.div`
    position: sticky;
    top: 0;
    box-shadow: 2px 2px 8px 0px #00000014;
    height: 60px;
    background-color: ${colors.gray};
    display: flex;
    align-items: center;
    font-family: Poppins, sans-serif;
    z-index: 999;

    .navbar-title{
        font-size: 18px;
        margin: 0px;
    }

    .navbar-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        min-height: 62.13px;
        overflow: auto;
    }

    .with-profile {
        background-color: ${colors.primaryColor};
    }

    .navbar-logo {
        height: 38px;
        margin-left: 30px;
    }

    .username-and-logout {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 35px;
    }
    .username-dropdown{
        display: flex;
        align-items: center;
    }

    .user-profile {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-right: 20px;
        .profile-name {
            color: ${colors.secondaryColor};
            font-size: 18px;
        }

        .log-out-icon {
            cursor: pointer;
            width: 25px;
            height: 25px;
        }
    }

    .calendar-container {
        position: absolute;
        top: calc(44px + 1em);
        right: 21%;
        z-index: 999;
        background-color: white; 
        border: 1px solid #ccc;
        border-radius: 20px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        padding: 10px; 
    }
      
    .react-calendar {
        width: 450px; 
        max-width: 100%;
        font-family: Poppins;
        border: none;
    }
      
    .react-calendar__month-view__weekdays {
        font-weight: 700;
        font-size: 14px;
    }
    
    .react-calendar__tile {
        padding: 1.3rem;
        font-weight: 500;
        font-size: 20px;
    }
    .react-calendar__tile:hover {
        background-color: #660033;
        color: white;
        padding: 1.3rem;
        font-weight: 500;
        font-size: 20px;
        border-radius: 30px;
    }
    
    .react-calendar__tile--active {
        background-color: #660033; 
        color: white;
        font-weight: 500;
        border-radius: 30px;
    }

    .react-calendar__tile--active:hover {
        background-color: #660033; 
        color: white;
        font-weight: 500;
        border-radius: 30px;
    }

    .react-calendar__tile--now {
        background: #ffff76;
        border-radius: 30px;
    }
    .disabled-date{
        background-color: white;
    }
    .disabled-date:hover{
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        cursor: not-allowed;
    }
    .react-calendar__tile.react-calendar__month-view__days__day:disabled{
        background-color: white;
        color: #ababab;
    }
    .react-calendar__tile.react-calendar__month-view__days__day:disabled:hover{
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        cursor: not-allowed;
    }
 
    .react-calendar__tile.react-calendar__month-view__days__day.disabled-date{
        background-color: white;
        color: #ababab;
    }
    .react-calendar__tile.react-calendar__month-view__days__day.disabled-date:hover{
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        cursor: not-allowed;
    }
   
    @media only screen and (max-width: 1070px) {
        .navbar-title {
            max-width: 400px;
            text-align: center;
        }
    }

    @media only screen and (max-width: 880px) {
        .navbar-title {
            max-width: 335px;
            margin-top: 25px;
            margin-bottom: 10px;
            margin-left: 5px;
            margin-right: 5px;
            font-size: 16px;
        }
        .navbar-logo {
            height: 38px;
            margin-left: 30px;
        }
        .calendar-container {
            right: 5vw;
            top: calc(55px + 1em);
        }
        .react-calendar {
            width: 390px;
        }
        .react-calendar__month-view__days {
            width: 390px;
        }
        .react-calendar__tile--active, .react-calendar__tile--now {
            padding: 0;
        }
        .react-calendar__month-view__days__day {
            font-size: 12px;
        }
        .react-calendar__tile:hover {
            font-size: 12px;
        }
    }
    @media (min-width: 481px) and (max-width: 700px){
        .navbar-title {
            font-size: 13px;
            max-width: 255px;
            margin-top: 40px;
        }
        .navbar-logo {
            height: 28px;
            margin-left: 10px;
        }
        .user-profile {
            gap: 5px;
            margin-right: 10px;
            .profile-name {
                font-size: 14px;
            }
            .log-out-icon {
                width: 25px;
                height: 25px;
            }
        }
        .calendar-container {
            right: 5vw;
            top: calc(58px + 1em);
        }
        .react-calendar {
            width: 390px;
        }
        .react-calendar__month-view__days {
            width: 390px;
        }
        .react-calendar__tile--active, .react-calendar__tile--now {
            padding: 0;
        }
        .react-calendar__month-view__days__day {
            font-size: 12px;
        }
        .react-calendar__tile:hover {
            font-size: 12px;
        }
    }
    @media only screen and (max-width: 580px) {
        .calendar-container {
            top: calc(70px + 1em);
        }
    }
    @media only screen and (max-width: 480px) {
        .navbar-title {
            font-size: 12px;
            max-width: 230px;
            margin-left: 30px;
            margin-top: 50px;
        }
        .user-profile {
            gap: 4px;
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            .profile-name {
                font-size: 14px;
            }
            .log-out-icon {
                width: 25px;
                height: 25px;
            }
        }
        .navbar-logo {
            height: 25px;
            margin-left: 15px;
        }
        .react-calendar {
            width: 310px;
        }
        .react-calendar__month-view__days {
            width: 305px;
        }
    }
    @media only screen and (max-width: 433px) {
        .calendar-container {
            top: calc(82px + 1em);
        }
    }
    @media only screen and (max-width: 370px) {
        .navbar-title {
            padding-top: 20px;
            padding-right: 20px;
        }
        .calendar-container {
            right: 5vw;
            top: calc(98px + 1em);
        }
        .react-calendar__month-view__days {
            width: 294px;
        }
        .react-calendar {
            width: 286px;
        }
    }
    @media only screen and (max-width: 346px) {
        .calendar-container {
            right: 2vw;
            top: calc(105px + 1em);
        }
        .navbar-title {
            padding-top: 35px;
        }
    }
`;

export const DateText = styled.span`
    margin: 0px 10px;
    color: #660033;
    font-weight: 600;
    cursor: pointer;
`;

export const CalendarContainer = styled.span`
    margin: 0px 10px 0px 5px;
    cursor: pointer;  
`;

export const DownloadButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #660033;
    color: ${colors.primaryColor};
    border-radius: 10px;
    padding: 8px 20px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    width: 176px;
    height: 40px;
    border: none;
    margin: 0px 5px;

    &:hover {
        background-color: #9c3066;
        color: ${colors.primaryColor};
        font-weight: 600;
    }
    &:disabled {
        background-color: #6c757d;
        cursor: auto;
    }

    @media only screen and (max-width: 880px) {
        font-size: 14px;
        width: 160px;
    }

    @media only screen and (max-width: 768px) {
        font-size: 12px;
        width: 120px;
    }
`;
