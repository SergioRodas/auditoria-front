import React, { useState, useEffect, useRef } from "react";
import { DropdownContainer, Tag } from "../../styles/ui/dropdown.js";


export interface Option {
    id: number;
    name: string;
    path?: string;
    callback?: () => void;
}

interface DropdownProps {
    placeholder?: string;
    selection: Option[];
    setSelection: React.Dispatch<React.SetStateAction<Option[]>>;
    options: Option[];
    multiSelect: boolean;
    iconStart?: JSX.Element;
    iconEnd?: JSX.Element;
    buttonEnd?: JSX.Element;
    lineEnd?: boolean;
    size?: "small" | "medium" | "large" | "full";
    width?: string;
    dropdownOpen: boolean;
    setDropdownOpen: (isOpen: boolean) => void;
    disabled?: boolean;
}

const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

const Dropdown: React.FC<DropdownProps> = ({
                                               placeholder,
                                               selection,
                                               setSelection,
                                               options,
                                               multiSelect,
                                               iconStart,
                                               iconEnd,
                                               buttonEnd,
                                               lineEnd,
                                               size,
                                               width,
                                               dropdownOpen,
                                               setDropdownOpen,
                                               disabled = false,
                                           }) => {
    const [scroll, setScroll] = useState(false);
    const dropdown = useRef<HTMLDivElement>(null!);
    const scrollable = useRef<HTMLDivElement>(null!);

    useOutsideClick(dropdown, () => setDropdownOpen(false));
    useEffect(() => {
        if (scroll && scrollable.current) {
            scrollable.current.scrollBy(200, 0);
            setScroll(false);
        }
    }, [scroll]);

    const handleSelection = (item: Option) => {
        if (!selection.some((current) => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
                setScroll(true);
            }
        } else {
            const selectionAfterRemoval = selection.filter(
                (current) => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
        }
        if (!multiSelect) setDropdownOpen(false);
    };

    const calculateWidth = () => {
        if (size === "small") return "150px";
        if (size === "medium") return "282px";
        if (size === "large") return "440px";
        if (size === "full") return "1150px";
        return width || "220px";
    };

    return (
        <DropdownContainer ref={dropdown} width={calculateWidth()}>
            <div
                className={`dropdown---area ${disabled ? "disabled" : ""}`}
                tabIndex={0}
                role="button"
                onClick={() => !disabled && setDropdownOpen(!dropdownOpen)}
            >
                <div className="btnStart">{iconStart}</div>
                <div
                    className={`dropdown---content ${placeholder ? "dropdown---content" : "dropdown---not-content"}`}
                    ref={scrollable}
                >
                    {selection.length === 0 ? (
                        <span className="content__placeholder">{placeholder}</span>
                    ) : (
                        selection.map((item) => (
                            <Tag key={item.id}>
                                <p>{item.name}</p>
                            </Tag>
                        ))
                    )}
                </div>
                {iconEnd ? (
                    <div className="btnEndNotExist">{iconEnd}</div>
                ) : (
                    <div className="btnEnd">{iconEnd}</div>
                )}
            </div>
            {dropdownOpen && (
                <div>
                    <ul className="dropdown---list">
                        {options.map((item, index) => (
                            <React.Fragment key={item.id}>
                                {lineEnd && index === options.length - 1 && options.length > 1 && <hr />}
                                <li className={selection.some((selectedItem) => selectedItem.id === item.id) ? 'optionSelected' : ''}>
                                    <button
                                        onClick={() => !disabled && handleSelection(item)}
                                        disabled={disabled}
                                    >
                                        <p>{item.name}</p>
                                    </button>
                                </li>
                            </React.Fragment>
                        ))}
                        {buttonEnd && <div className="styleBtn">{buttonEnd}</div>}
                    </ul>
                </div>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;




