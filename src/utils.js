/**
 * Returns number of selected downloads
 * @param {array} items 
 * @returns {array}
 */
export const countSelected = (items) => {
  return items.filter(item => item.checked).length;
}

/**
 * Returns downloads that have `available` status
 * @param {array} items 
 * @returns {array}
 */
export const getAvailableDownloads = (items) => {
  return items.filter(item => item.status === 'available');
}

/**
 * Returns selected downloads regardless of status
 * @param {array} items 
 * @returns {array}
 */
export const getSelectedDownloads = (items) => {
  return items.filter(item => item.checked); 
}

/**
 * Returns selected downloads that have `available` status
 * @param {array} items 
 * @returns {array}
 */
export const getSelectedAvailableDownloads = (items) => {
  return items.filter(item => item.checked && item.status === 'available'); 
}

/**
 * Returns selected downloads that DO NOT have `available` status
 * @param {array} items 
 * @returns {array}
 */
export const getSelectedUnavailableDownloads = (items) => {
  return items.filter(item => item.checked && item.status !== 'available'); 
}