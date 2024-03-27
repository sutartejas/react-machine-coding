import { useState, useEffect,useRef } from "react"

const cityNames = [
    "Amsterdam",
    "Berlin",
    "London",
    "New York",
    "Paris",
    "Rome",
    "San Francisco",
    "Tokyo",
    "Washington DC",
    "Zurich",
    "Copenhagen",
    "Helsinki",
    "Madrid",
    "Reykjavik",
    "Stockholm",
    "Vancouver",
    "Vienna",
    "Zagreb",
    "Budapest",
    "Dublin",
    "Hamburg",
    "Krakow",
    "Lisbon",
    "Ljubljana"
];


const AutoComplete = () => {
    const [inputValue, setInputValue] = useState("");
    const [data] = useState(cityNames);
    const [filteredData, setFilteredData] = useState([])
    const autocompleteRef = useRef(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleClick = (event) => {
            if (
                autocompleteRef.current &&
                !autocompleteRef.current.contains(event.target)
            ) {
                setShow(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const handleChange = (value) => {
        setInputValue(value);
        const debouncedValue = debounce(fn);
        debouncedValue(value)
    }

    const debounce = function (fn) {
        let timer = null;
        return function (...args) {
            let context = this;
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, 500);
        }
    }

    const fn = (value) => {
        const filteredData = data.filter(m => {
            return m.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        });
        setFilteredData(filteredData);
    }

    const handleClick = (value) => {
        setInputValue(value);
        setShow(false);
    };

    return <div className="autocomplete" ref={autocompleteRef}>
        <input
            type="text"
            value={inputValue}
            className="input"
            placeholder="Type to search..."
            onFocus={() => setShow(true)}
            onChange={(e) => handleChange(e.target.value)}
        />
        {show &&
            <ul>{filteredData.map((row) => {
                return <li key={row} onClick={() => handleClick(row)}>{row}</li>;
            })}
            </ul>
        }
    </div>

}

export default AutoComplete