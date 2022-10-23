import { useEffect, useRef } from 'react';
import './Header.css';

function Header(props) {
  const checkboxInput = useRef(null);

  useEffect(() => {
    if (props.selectedDownloadCount === 0) {
      checkboxInput.current.checked = false;
      checkboxInput.current.indeterminate = false;
    } else if (props.selectedDownloadCount === props.totalDownloadCount) {
      checkboxInput.current.checked = true;
      checkboxInput.current.indeterminate = false;
    } else {
      checkboxInput.current.checked = false;
      checkboxInput.current.indeterminate = true;
    }
  }, [props.selectedDownloadCount]);

  const handleSelectAll = () => {
    props.selectAllDownloads();
  }

  const handleDownload = () => {
    props.promptDownload();
  }

  return (
    <header className="Header">
      <div className="SelectAll">
        <input 
          type="checkbox"
          onChange={handleSelectAll}
          name="selectall"
          id="selectall"
          ref={checkboxInput}
          defaultChecked={false}
        />
        <label
          htmlFor="selectall"
          className="SelectAllLabel"
        >
          {props.selectedDownloadCount > 0 
            ? <>{props.selectedDownloadCount} Selected</>
            : <>None Selected</>
          }
        </label>
      </div>
      <div className="Download">
        <button
          className="DownloadButton"
          disabled={!props.selectedDownloadCount}
          onClick={handleDownload}
        >
          <svg 
            className="downloadIcon"
            aria-labelledby="donwloadTitle"
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
          >
            <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"/>
            <title id="downloadTitle">Download Icon</title>
          </svg>
          <>Download Selected</> 
        </button>
      </div>
    </header>
  );
}

export default Header;