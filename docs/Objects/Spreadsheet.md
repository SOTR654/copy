---
layout: page
description: "Focused on a GoogleSheets file."

properties:
  - name: "DocumentID"
    type: "string"

  - name: "PagesData"
    type: "Sheet"

---

<link href="css/styles.css" rel="stylesheet" type="text/css">

# Properties

<div class="top">   DocumentID string  </div>
<div class="info">  read-only  <br> Stores the ID of the page that created it.  </div>
<div class="top">   <b>PagesData</b> Sheet  </div>
<div class="info">  List of Sheet ordered by index that contains the file.  </div>
<br>

# Methods

### OpenPage
Open the specific Sheet object. according to the name. 

<div class="top"> Parameters </div>
<div class="info">a
  <b>Name:</b> string
  <br>Page name.
</div>
<div class="top"> Returns </div>
<div class="info">
  Sheet <br> Represents the requested page.
</div>
<br>

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
