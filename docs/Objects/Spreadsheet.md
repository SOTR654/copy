---
layout: page
description: "Focused on a GoogleSheets file."

properties:
  - name: DocumentID
    type: string
    description: Stores the ID of the page that created it.
    read_only: true
    nourl: true

  - name: PagesData
    type: Sheet
    description: List of Sheet ordered by index that contains the file.

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

  - name: RefreshFile
    description: Replace all changes to all pages in the file on the web, the Cell obtained will not be affected.
    
  - name: SubmitFile
    description: Upload all the changes of all the pages to the file on the web.
    
---