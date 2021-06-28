
import Contact from './Components/Contact.js';
import "./index.css"

function App() {
  return (
    <div className="App bg-gray-900 w-screen justify-center">
      
     
      <div className="p-20 flex justify-center items-start flex-col max-w-4xl m-auto">
      <h1 className="text-2xl text-white">Hi there 👋</h1>
      <p className="text-gray-400 mt-5 text-lg text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
      <Contact />
    </div>

      <iframe title="airtable" className="airtable-embed" src="https://airtable.com/embed/shrR3MnZycYg7gk9s?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" ></iframe>
    </div>
  );
}

export default App;
