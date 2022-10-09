import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [date, setDate] = useState("");

    const onTextInput = (event: any) => {
        console.log(event.target.value);
        // calculate date from nanoseconds from initial date
        const date = new Date(0);
        // 946681200 J12000
        date.setUTCSeconds((event.target.value / 1000000000) + 946681200);

        // set date to locale date + local time
        setDate(date.toLocaleDateString() + " " + date.toLocaleTimeString());
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="text-center max-w-lg my-6">
                    <h1 className="text-4xl text-gray-500 dark:text-gray-400">Epoch Time Converter</h1>
                    <p className="font-light text-gray-500 dark:text-gray-400 my-2">Convert time from CDF_TT2000 epoch timing standard (long64
                        integer number of nanoseconds since J2000, with leap seconds included).</p>

                </div>
            </div>
            <div className="flex justify-center md:flex-row flex-col">
                <div className="w-full md:max-w-md my-6">
                    <form>
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                   className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="eg. 662731289533143168" onInput={onTextInput}/>
                        </div>
                    </form>
                    <div className="flex flex-col justify-center text-center my-12">
                        <h1 className="text-2xl text-gray-500 dark:text-gray-400">Result</h1>
                        <h1 className="text-3xl text-gray-500 dark:text-gray-400">{date}</h1>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
