import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const lang = [
    { name: 'English', code: 'en', iconClass: 'bg-england' },
    { name: 'Polish', code: 'pl', iconClass: 'bg-poland' },
];

const Language = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(lang[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLang(language);
        setIsOpen(false);
        // Tutaj można dodać logikę do zmiany języka w aplikacji
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className={` justify-center items-center p-2 text-sm text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring  w-[50px] bg-cover bg-no-repeat bg-center md:rounded-r-full  border-y border-r  ${
                        selectedLang.iconClass
                    }`}
                    onClick={toggleDropdown}
                >
                <span className="text-transparent">lang</span>
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                {(ref) => (
                    <div
                        ref={ref}
                        className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {lang.map((item, index) => (
                                <button
                                    key={index}
                                    className={`block w-full text-left px-4 py-2 text-sm ${
                                        selectedLang === item ? 'bg-gray-200' : 'hover:bg-gray-100'
                                    }`}
                                    onClick={() => selectLanguage(item)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default Language;
