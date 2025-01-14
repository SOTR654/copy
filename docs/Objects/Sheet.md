---
layout: page
description: Focused on a Sheet object.

properties:
  - name: Name
    type: string
    description: Page name, modifiable through <code>Rename</code>

  - name: Size
    type: Vector2
    description: Position of the farthest cell.

  - name: PageID
    type: number
    description: Positive integral number that represents the page, -1 if it is a temporary page.

  - name: Cells
    type: "{{Cell}}"
    description: List containing the information of all cells.

  - name: Parent
    type: Spreadsheet
    description: Reference to the Spreadsheet that contains this page.

  - name: State
    type: '"Removed"|"Empty"|"Ready"|"Updating"'
    description: "According to the current task:
    Removed: deleted page.
    Empty: the page has no content.
    Ready: the page has content and is ready to be used.
    Updating: indicates that it is waiting for data from the api."

  - name: isEmpty
    type: boolean
    description: Indicates if the page has content, useful to verify if <code>RefreshPage</code> worked.

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
        
  - name: GetCellByPos
    description: Returns the requested cell.
    parameters:
      - name: x
        type: number
        description: Column.
      - name: y
        type: number
        description: Row.
    returns:
      - type: Cell
        description: Requested cell.

  - name: GetAllCells
    description: Returns a list with all the cells on the page.
    returns:
      - type: Range
        description: Fixed range containing all cells.

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
    
  - name: ClonePage
    description: Create a new temporary page with all the current page data.
    parameters:
      - name: newName
        type: string?
        description: Name for the new page, otherwise it will use the name of the current page and a number will be added
    
  - name: RemovePage
    description: Delete the page and make it read-only.
    
  - name: Rename
    description: Replace the name of the page.
    parameters:
      - name: newName
        type: string
        description: New page name.

  - name: RefreshPage
    description: Replace all changes on this page in the file on the web, the Cell obtained will not be affected.
    
  - name: SubmitPage
    description: Upload all the changes on this page to the file on the web.

---