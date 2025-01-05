---
layout: page
description: "Focused on a GoogleSheets file."

properties:
  - name: DocumentID
    type: string
    description: Stores the ID of the page that created it.
    read_only: true
    nourl: true

    name: PagesData
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
        description: Page name.

  - name: ClosePage
    description: Close the specified Sheet object.
    parameters:
      - name: Name
        type: string
        description: Name of the page to close.
    returns:
      - type: bool
        description: Returns true if the page was closed successfully.

---

### CreateBlankPage
Create an Sheet without data and that will not be uploaded to the original file, you must use `Submit` to apply the changes.

<div class="top"> Parameters </div>
<div class="info">
  <b>Name:</b> string
  <br>Optional parameter for the name of the page, by default it will be called <code>Blank</code> and the current index.
</div>
<div class="top"> Returns </div>
<div class="info">
  Sheet <br>Represents the requested page.
</div>
<br>

### RefreshFile
Replace all changes to all pages in the file on the web, the Cell obtained will not be affected.

<div class="top"> Parameters </div>
<div class="info">  void  </div>
<div class="top"> Returns </div>
<div class="info">  void  </div>
<br>

### SubmitFile
Upload all the changes of all the pages to the file on the web.

<div class="top"> Parameters </div>
<div class="info">  void  </div>
<div class="top"> Returns </div>
<div class="info">  void  </div>
<br>
