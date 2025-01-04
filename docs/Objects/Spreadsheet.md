### [Return to Main](https://sotr654.github.io/copy/)
<link href="css/styles.css" rel="stylesheet" type="text/css">

Focused on a GoogleSheets file.
___
<br>
<br>


# Properties

### DocumentID `string`
Read-only property, stores the ID of the page that created it

### PagesData <code> {[Sheet](Sheet.md)} </code>
List of [`Sheet`](Sheet.md) ordered by index that contains the file.

<br>
<br>

# Methods

## OpenPage
Open the specific [`Sheet`](Sheet.md) object. according to the name. 

<div class="top"><b>Parameters</b></div>
<div class="info">
  <b>Nam:</b> <code>string</code><br>
    Page name.
</div>
<br>

<div class="top"><b>Returns</b></div>
<div class="info">
  <b>Sheet:</b> <code><a href="Sheet.md">Sheet</a></code><br>
    Sheet that represents the requested page.
</div>

<br>
<br>
    export type Spreadsheet = {

        --		Methods		--
        OpenPage: (self: Spreadsheet, Name: string) -> Sheet,
        CreatesBlankPage: (self: Spreadsheet, Name: string?) -> Sheet,
        RefreshFile: (self: Spreadsheet) -> (),
        SubmitFile: (self: Spreadsheet) -> (),
    }