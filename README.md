# Table Component

## Steps

**Install dependencies:**

`npm install`

**Run:**

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Data:

```
[
    {name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'},
    {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'},
    {name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'},
    {name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled'},
    {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'}
]
```

### Requirements:

- [x] Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
- [x] The select-all checkbox should be in an unselected state if no items are selected
- [x] The select-all checkbox should be in a selected state if all items are selected.
- [x] The select-all checkbox should be in an indeterminate state if some but not all items are selected.
- [x] The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
- [x] Clicking the select-all checkbox should select all items if none or some are selected.
- [x] Clicking the select-all checkbox should de-select all items if all are currently selected.
- [x] Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.
- [x] Status should be correctly formatted
- [x] Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.
