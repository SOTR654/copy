---
layout: page
Description: "Focused on a GoogleSheets file."
---

<link href="css/styles.css" rel="stylesheet" type="text/css">

# Properties
<span class="readonly">formato de código</span>

<code><span style="color:red">read-only
</span></code>


<div class="top">
  DocumentID string
</div>
<div class="info">
  Read-onlyStores the ID of the page that created it.
</div> <br>

<div class="top">
  PagesData Sheet
</div>
<div class="info">
  List of Sheet ordered by index that contains the file.
</div> <br>

<br>
<br>

# Methods

### OpenPage
Open the specific Sheet object. according to the name. 

<div class="top"> Parameters </div>
<div class="info">
  <b>Name:</b> <code>string</code>
  <br>Page name.
</div> <br>

<div class="top"> Returns </div>
<div class="info">
  <b>Sheet</b>
  <br>Represents the requested page.
</div> <br>

### CreatesBlankPage
Create an Sheet without data and that will not be uploaded to the original file, you must use `Submit` to apply the changes.

<div class="top"> Parameters </div>
<div class="info">
  void
</div> <br>

<div class="top"> Returns </div>
<div class="info">
  <b>Sheet</b>
  <br>Represents the requested page.
</div> <br>





___

        CreatesBlankPage: (self: Spreadsheet, Name: string?) -> Sheet,
        RefreshFile: (self: Spreadsheet) -> (),
        SubmitFile: (self: Spreadsheet) -> (),