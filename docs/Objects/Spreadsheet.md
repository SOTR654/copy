---
layout: page
description: Focused on a Spreadsheet object.

properties:
  - name: DocumentID
    type: string
    description: Stores the ID of the page that created it.

  - name: PagesData
    type: "{Sheet}"
    description: List of Sheet ordered by index that contains the file.

  - name: Name
    type: string
    description: Current file name, modify it with <code>Rename</code>.

methods:
  - name: OpenPage
    description: Open the specific Sheet object, according to the name.
    parameters:
      - name: Name
        type: string
        description: Page name.
    returns:
      - type: Sheet
        description: Represents the requested page.

  - name: CreateBlankPage
    description: Create an Sheet without data and that will not be uploaded to the original file, you must use <code>Submit</code> to apply the changes.
    parameters:
      - name: Name
        type: string
        description: Optional parameter for the name of the page, by default it will be called <code>Blank</code> and the current index.
    returns:
      - type: Sheet
        description: Represents the requested page.

  - name: Rename
    description: This function will change the name of the file, the changes will be updated when using <code>SubmitFile</code>.
    parameters:
      - name: newName
        type: string
        description: New name.

  - name: RefreshFile
    description: It will delete all the pages and create new tables based on the file on the web, the previous pages will not be affected but they will not be able to be uploaded to the file.
    
  - name: SubmitFile
    description: It will upload the changed properties to the file on the web.
    
---
