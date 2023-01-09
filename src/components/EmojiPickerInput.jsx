import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

const EmojiPickerInput = () => {
    const refInput = useRef(null);

  
    return ( 
        <>
        <input className="inputt" ref={refInput} />
        <EmojiPicker ref={refInput} />
        </>
     );
}
 
export default EmojiPickerInput;