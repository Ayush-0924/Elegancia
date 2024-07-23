import React from "react";

export default function SearchFilter() {
  return (
    <div>
      <div className="form-container">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label">Search Term:</label>
              <input
                className="input"
                placeholder="Search..."
                id="searchTerm"
                type="text"
                value={sidebarData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="label">price range</label>
              <select
                className="select"
                onChange={handleChange}
                value={sidebarData.price}
                id="price"
              >
                <option value="1">100-500</option>
                <option value="2">500-2000</option>
                <option value="3">2000-5000</option>
                <option value="4">5000-10000</option>
                <option value="5">10000-20000</option>
                <option value="6">20000-200000</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label">Category:</label>
              <select
                className="select"
                onChange={handleChange}
                value={sidebarData.category}
                id="category"
              >
                <option value="uncategorized">Uncategorized</option>
                <option value="reactjs">React.js</option>
                <option value="nextjs">Next.js</option>
                <option value="javascript">JavaScript</option>
              </select>
            </div>
            <button className="button" type="submit">
              Apply Filters
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
