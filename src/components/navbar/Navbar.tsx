import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {NavbarComponent, DateText, CalendarContainer} from "./styles.tsx";
import {useAuthStore} from "../../store/auth.ts";
import LogOut from "../../assets/icons/Log-out.tsx";
import Calendar from "../../assets/icons/Calendar.tsx";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {findLastMonday, formatDate, getCurrentDateInMexicoTimezone} from "../../utils/dateUtils.ts";
import Loader from '../loader/Loader';
import Dropdown, {Option} from "../ui/Dropdown.tsx";
import ArrowDown from "../../assets/icons/ArrowDown.tsx";
import {useLoadingStore} from "../../store/loading.ts";
import ArrowDropdown from "../../assets/icons/ArrowDropdown.tsx";

const Navbar = ({currentDate, setCurrentDate, downloadPDF, isDownloading}) => {
    const profile = useAuthStore((state) => state.profile);
    const logout = useAuthStore((state) => state.logout);
    const { isLoading } = useLoadingStore();
    const navigate = useNavigate();
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [isWeekly, setIsWeekly] = useState<boolean>(false);
    const [lastMonday, setLastMonday] = useState<Date>
        (findLastMonday(getCurrentDateInMexicoTimezone()));
    const [selectedOption, setSelectedOption] = useState<Option[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);

    const toggleCalendar = () => {
        setCalendarOpen(!isCalendarOpen);
    };

    const handleDateChange = (date: any, isWeekly: boolean) => {
        const selectedDate = Array.isArray(date) ? date[0] : date;
        const dateToFormat = selectedDate;

        if (isWeekly) {
            const dateToFormat = findLastMonday(formatDate(selectedDate));
            setLastMonday(dateToFormat);
        }

        const formattedDate = formatDate(dateToFormat);
        setCurrentDate(formattedDate);
        setCalendarOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 105);

    // Deshabilita los días lunes
    const isDayDisabled = ({date}) => {
        if (!isWeekly) return false;
        return date.getDay() !== 1;
    };

    const dateToRender = isWeekly ? lastMonday : newDate;

    const dropdownOptions =
        [
            {id: 1, name: "Balance Diario", path: '/daily'},
            {id: 2, name: "Balance Semanal", path: '/weekly'},
            {id: 3, name: "Descargar PDF", callback: downloadPDF}
        ];

    // Verificar si la ruta actual contiene "weekly"
    useEffect(() => {
        const path = window.location.pathname;
        const containsWeekly = path.includes('weekly');
        setIsWeekly(containsWeekly);
    }, []);

    // Manejar la selección de una opción del dropdown
    useEffect(() => {
        if (!selectedOption || !selectedOption.length) return;
        const option = selectedOption[0];

        if (option.path) {
            const pathIsWeekly = option.path.includes('weekly');
            setIsWeekly(pathIsWeekly);
            navigate(option.path);
        }

        if (option.callback) option.callback();

        setSelectedOption([]);
    }, [navigate, selectedOption]);


    return (
        <NavbarComponent id="site-navbar">
            <div className={`navbar-content${profile ? " with-profile" : ""}`}>
                <img
                    src="/logos/logo_intelite.png"
                    alt="Logo Intelite"
                    className="navbar-logo"
                />

                {profile && (
                    <>
                        <p className="navbar-title">
                            Análisis de posicionamiento en medios /
                            {dateToRender && (
                                <DateText onClick={toggleCalendar}>
                                    {dateToRender.toLocaleDateString("es", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </DateText>
                            )}
                            <CalendarContainer>
                                <Calendar
                                    width={"21px"}
                                    height={"22px"}
                                    fill={"none"}
                                    onClick={toggleCalendar}
                                />
                            </CalendarContainer>
                        </p>
                        {isCalendarOpen && (
                            <div className="calendar-container">
                                <ReactCalendar
                                    value={dateToRender}
                                    onChange={(props) => handleDateChange(props, isWeekly)}
                                    maxDate={new Date()}
                                    minDate={minDate}
                                    tileDisabled={isDayDisabled}
                                />
                            </div>
                        )}
                        <div className="user-profile">
                            <div>
                                {
                                    isDownloading ?
                                        <Loader width="30px" height="30px"
                                                className={"loading awaiting-download"}/> : ''
                                }
                            </div>
                            <div className="username-and-logout">

                                <div className="username-dropdown">
                                    <Dropdown
                                        placeholder={profile.username}
                                        selection={selectedOption}
                                        setSelection={setSelectedOption}
                                        options={dropdownOptions}
                                        multiSelect={false}
                                        lineEnd={true}
                                        dropdownOpen={dropdownOpen}
                                        setDropdownOpen={setDropdownOpen}
                                        disabled={isLoading}
                                    />
                                    {!dropdownOpen ?
                                        <ArrowDown width='13px' height='8px'/>
                                        :
                                        <ArrowDropdown width='13px' height='8px'/>
                                    }
                                </div>
                                <div className="log-out-icon">
                                    <LogOut
                                        width={"25px"}
                                        height={"25px"}
                                        fill={"none"}
                                        onClick={handleLogout}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </NavbarComponent>
    );
};

export default Navbar;
