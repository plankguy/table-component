import './App.css';
import Table from'../Table/Table';
import Header from'../Header/Header';
import data from '../data';
import Row from '../Row/Row';
import { useState } from 'react';
import { 
  countSelected,
  getSelectedAvailableDownloads,
  getSelectedUnavailableDownloads
} from '../utils';

/**
 * Main App 
 * @param {void}
 * @returns {object}
 */
const App = () => {
  
  // Init download list state
  const [downloads, setDownloads] = useState({
    selectedDownloadCount: countSelected(data),
    totalDownloadCount: data.length,
    list: data.map(item => ({
      ...item, 
      id: item.name.replace(/[^A-Z0-9]+/ig, ''),
      checked: false,
    })),
  });

  /**
   * Updates selection state of all downloads
   * @param {void}
   * @return {void}
   */
  const selectAllDownloads = () => {
    if (countSelected(downloads.list) < downloads.list.length) {
      setDownloads(prevState => ({
        ...prevState,
        list: prevState.list.map(item => ({
          ...item,
          checked: true,
        }))
      }));
    } else {
      setDownloads(prevState => ({
        ...prevState,
        list: prevState.list.map(item => ({
          ...item,
          checked: false,
        }))
      }));
    }
    setDownloads(prevState => ({
      ...prevState,
      selectedDownloadCount: countSelected(prevState.list),
    }));
  }

  /**
   * Updates state of selected downloads
   * @param {string} selectedId
   * @return {void}
   */
  const updateSelected = (selectedId) => {
    setDownloads(prevState => ({
      ...prevState,
      list: prevState.list.map(item => {
        if (item.id === selectedId) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    }));
    setDownloads(prevState => ({
      ...prevState,
      selectedDownloadCount: countSelected(prevState.list),
    }));
  }

  /**
   * Updates state of selected downloads
   * @param {void}
   * @return {void}
   */
  const promptDownload = () => {
    const availableDownloads = getSelectedAvailableDownloads(downloads.list);
    const unavailableDownloads = getSelectedUnavailableDownloads(downloads.list);
    const formatDownloadItems = (items) => items.map(item => `• ${item.device} "${item.path}"`).join('\n');
    let downloadMsg = '';
    
    if (availableDownloads.length) {
      downloadMsg += `Downloading:
        --------------
        ${formatDownloadItems(availableDownloads)}\n\n`;
    }
    
    if (unavailableDownloads.length) {
      downloadMsg += `Not available:
        --------------
        ${formatDownloadItems(unavailableDownloads)}`;
    }

    alert(downloadMsg.replace(/^ +/gm, ''));
  }
  
  return (
    <div className="App">
      <Header
        totalDownloadCount={downloads.totalDownloadCount} 
        selectedDownloadCount={downloads.selectedDownloadCount}
        selectAllDownloads={selectAllDownloads}
        promptDownload={promptDownload}
      />
      <Table>
        {
          downloads.list.map(({id, name, device, path, status, checked}, i) => {
            return (
              <Row 
                key={id}
                id={id}
                name={name}
                device={device}
                path={path}
                status={status}
                checked={checked}
                updateSelected={updateSelected}
              />
            )
          })
        }
      </Table>
    </div>
  );
}

export default App;
