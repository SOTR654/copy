---
layout: page
description: Focused on a Sheet object.

properties:
  - name: Name
    type: string
    description: Page name.

  - name: PageID
    type: number
    description: Positive integral number that represents the page, -1 if it is a temporary page.
    read_only: true

  - name: Cache
    type: "{{Cell}}"
    description: List with lists containing the data for each cell.
    read_only: true

  - name: Changes
    type: "{[string]: Cell}"
    description: Dictionary that stores the changed cells.
    read_only: true

  - name: Parent
    type: Spreadsheet
    description: Reference to the Spreadsheet that contains this page.
    read_only: true

methods:
  - name: GetCell
    description: Returns the requested cell.
    parameters:
      - name: Cell
        type: string
        description: Cell name in A1 format.
    returns:
      - type: Cell
        description: Requested cell.

  - name: GetRange
    description: Returns all cells between Start and End.
    parameters:
      - name: Start
        type: string
        description: Cell name in A1 format.
        
      - name: End
        type: string
        description: Cell name in A1 format.
    returns:
      - type: Range
        description: Fixed range containing all cells between Start and End.

  - name: GetAllCells
    description: Returns a list with all the cells on the page.
    returns:
      - type: Range
        description: Fixed range containing all cells.
    
  - name: ClonePage
    description: Create a new temporary page with all the current page data.
    parameters:
      - name: newName
        type: string?
        description: Name for the new page, otherwise it will use the name of the current page and a number will be added

  - name: RefreshPage
    description: Replace all changes on this page in the file on the web, the Cell obtained will not be affected.
    
  - name: SubmitPage
    description: Upload all the changes on this page to the file on the web.

---