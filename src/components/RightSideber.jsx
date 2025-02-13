import React from 'react';

const RightSideber = () => {
    return (
        <>
             <div className="switcher-body">
  <button className="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-paint-bucket me-0" /></button>
  <div className="offcanvas offcanvas-end shadow border-start-0 p-2" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling">
    <div className="offcanvas-header border-bottom">
      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Theme Customizer</h5>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <h6 className="mb-0">Theme Variation</h6>
      <hr />
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="LightTheme" defaultValue="option1" />
        <label className="form-check-label" htmlFor="LightTheme">Light</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="DarkTheme" defaultValue="option2" />
        <label className="form-check-label" htmlFor="DarkTheme">Dark</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="SemiDarkTheme" defaultValue="option3" defaultChecked />
        <label className="form-check-label" htmlFor="SemiDarkTheme">Semi Dark</label>
      </div>
      <hr />
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="MinimalTheme" defaultValue="option3" />
        <label className="form-check-label" htmlFor="MinimalTheme">Minimal Theme</label>
      </div>
      <hr />
      <h6 className="mb-0">Header Colors</h6>
      <hr />
      <div className="header-colors-indigators">
        <div className="row row-cols-auto g-3">
          <div className="col">
            <div className="indigator headercolor1" id="headercolor1" />
          </div>
          <div className="col">
            <div className="indigator headercolor2" id="headercolor2" />
          </div>
          <div className="col">
            <div className="indigator headercolor3" id="headercolor3" />
          </div>
          <div className="col">
            <div className="indigator headercolor4" id="headercolor4" />
          </div>
          <div className="col">
            <div className="indigator headercolor5" id="headercolor5" />
          </div>
          <div className="col">
            <div className="indigator headercolor6" id="headercolor6" />
          </div>
          <div className="col">
            <div className="indigator headercolor7" id="headercolor7" />
          </div>
          <div className="col">
            <div className="indigator headercolor8" id="headercolor8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default RightSideber;