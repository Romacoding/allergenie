import React from "react";
import { Input } from 'antd';
export default function Search() {
    const { Search } = Input;
    const [searchZip, setZip] = React.useState({ searchZip: " " });

    function handleUserInput(value) {
            const re = /^[0-9\b]+$/;
            if (re.test(value)) {
                setZip({ searchZip: value})
            }
         };

    // function validateInput (value) {
    //     if (value.length >= 5){
    //         setZip({ searchZip: value});
    //     }
    // };
// console.log(searchZip);
return (
//     <input
//     placeholder='Enter your zip code'
//     onChange={handleZipChange}
//     loading={searchLoading.searchLoading}
// />

<Search
type='tel'
pattern="^-?[0-9]\d*\.?\d*$"
placeholder="Input your zip code"
// onInput={value => validateInput(value)}
onSearch={value => handleUserInput(value)}
style={{ width: 200 }}
/>
)
};