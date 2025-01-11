---
layout: page
description: Focused on a Cell object.

properties:
  - name: Parent
    type: Sheet
    description: Page that created this cell.

  - name: ID
    type: string
    description: ID in A1 format of the cell position.

  - name: Pos
    type: Vector2
    description: Position of the cell.

methods:
  - name: GetData
    description: Returns a copy of the cell data.
    parameters:
      - name: mode
        type: '"data"|"cloud"'
        description: 'What type of data should be returned;
    "cloud" refers only to data in the website file.
    "data" refers to current data.'
    returns:
      - type: CellData
        description: All the data contained in the cell.

  - name: SetValue
    description: Write the new value in <code>data</code> and add the cell to update.
    parameters:
      - name: value
        type: string|number
        description: New value.

  - name: SetColor
    description: Applies a color to the cell background or text.
    parameters:
      - name: mode 
        type: '"background", "text"'
        description: Color mode.
      - name: value
        type: string|Color3
        description: Color in <code>Color3</code> or <code>HEX</code> format.

  - name: Clear
    description: Delete the data from the cell.

---