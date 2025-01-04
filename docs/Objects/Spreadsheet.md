---
layout: page
Description: "Focused on a GoogleSheets file."
---
# Properties
<span class="readonly">formato de código</span>


<code><span style="color:red">read-only
</span></code>



<div class="top">
  DocumentID <code>string</code>
</div>
<div class="info">
  Read-only property, stores the ID of the page that created it
</div> <br>

### DocumentID `string`
Read-only property, stores the ID of the page that created it

### PagesData <code> {[Sheet](Sheet.md)} </code>
List of [`Sheet`](Sheet.md) ordered by index that contains the file.

<br>
<br>

# Methods

### OpenPage
Open the specific [`Sheet`](Sheet.md) object. according to the name. 

<div class="top"> Parameters </div>
<div class="info">
  <b>Name:</b> <code>string</code>
  
  Page name.
</div> <br>

<div class="top"> Returns </div>
<div class="info">
  <b>Sheet:</b> <code><a href="Sheet.md">Sheet</a></code>

  Sheet that represents the requested page.
</div> <br>

### CreatesBlankPage
Create an [`Sheet`](Sheet.md) without data and that will not be uploaded to the original file, you must use [`Submit`](Sheet.md) to apply the changes.

<div class="top"> Parameters </div>
<div class="info">
  void
</div> <br>

<div class="top"> Returns </div>
<div class="info">
  <b>Sheet:</b> <code><a href="Sheet.md">Sheet</a></code>

  Sheet that represents the requested page.
</div> <br>





___

        CreatesBlankPage: (self: Spreadsheet, Name: string?) -> Sheet,
        RefreshFile: (self: Spreadsheet) -> (),
        SubmitFile: (self: Spreadsheet) -> (),