---
layout: page
description: Focused on the GoogleSheets API.

methods:
  - name: OpenSheets
    description: Method that will open and return the indicated file in the form of an Spreadsheet object.
    parameters:
      - name: DocumentID
        type: string
        description: ID of the Spreadsheet to open.
    returns:
      - type: Spreadsheet
        description: Spreadsheet representing the file.

---