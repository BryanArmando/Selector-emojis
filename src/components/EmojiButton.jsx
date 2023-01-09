const EmojiButton = ({emoji, onClick}) => {

    function hanldeClick(){
        onClick(emoji)

    }

    return ( 
        <button className="emojiButton" onClick={hanldeClick} >
            {emoji.symbol}
        </button>
     );
}
 
export default EmojiButton;