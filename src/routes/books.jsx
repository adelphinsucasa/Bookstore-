import Form from '../components/Form';
import Book from '../components/Book';

const Books = () => (
  <div id="books">
    <Book title="The Hunger Games" category="Action" author="Suzanne Collins" percent="64" />
    <Book title="Dune" category="Science Fiction" author="Frank Herbert" percent="8" />
    <Book title="Capital in the Twenty-First Century" category="Economy" author="Suzanne Collins" percent="0" />
    <div className="line" />
    <Form />
  </div>
);

export default Books;
