import "../Styles/filterbox.scss";

function FilterBox() {
  return (
    <div className="filter-form-container">
      <form>
        <div className="fields">
          <label>Organization</label>
          <select>
            <option>Select</option>
          </select>
        </div>

        <div className="fields">
          <label>Username</label>
          <input type="text" placeholder="User" />
        </div>

        <div className="fields">
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>

        <div className="fields">
          <label>Date</label>
          <input type="date" placeholder="Date" />
        </div>

        <div className="fields">
          <label>Phone number</label>
          <input type="number" placeholder="Phone number" />
        </div>

        <div className="fields">
          <label>Status</label>
          <select>
            <option>Select</option>
          </select>
        </div>

        <div className="reset-filter-btns">
          <button className="reset-btn">Reset</button>
          <button className="filter-btn">Filter</button>
        </div>
      </form>
    </div>
  );
}

export default FilterBox;
