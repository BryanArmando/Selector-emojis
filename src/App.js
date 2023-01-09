
import './App.css';
import EmojiPickerInput from './components/EmojiPickerInput';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
      <h2>
        <img src='./kruger.png' alt='none' width="55px" />
        Bienvenidos al proyecto, selector de emojis
      </h2>
      <EmojiPickerInput/>
      </header>
    </div>
        
     
  );
}

export default App;
