import { useState } from "react";

const EmojiSearch = ({onSearch}) => {
    const [value, setValue] = useState("");

    function handleChange(e){
        setValue(e.target.value);
        onSearch(e.target.value);

    }

    return ( 
        <input className="search" type="text" onChange={handleChange} value={value}/>
     );
}
 
export default EmojiSearch;