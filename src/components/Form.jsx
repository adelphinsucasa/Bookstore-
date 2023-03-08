const Form = () => (
  <section className="formSection">
    <span className="formTitle">
      ADD NEW BOOK
    </span>
    <form>
      <input
        className="inputField"
        placeholder="Book title"
        aria-label="Title"
        name="title"
        required
      />
      <input
        className="inputField"
        placeholder="Author"
        aria-label="Author"
        name="author"
        required
      />
      <select name="category" className="inputField" required>
        <option value="">Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>
      <button className="addBook" type="submit">
        ADD BOOK
      </button>
    </form>
  </section>
);

export default Form;
