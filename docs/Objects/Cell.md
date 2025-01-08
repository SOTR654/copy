---
layout: page
description: Focused on a Cell object.

properties:
  - name: Parent
    type: Sheet
    description: Page that created this cell.
    read_only: true

  - name: ID
    type: string
    description: ID in A1 format of the cell position.
    read_only: true

  - name: Pos
    type: Vector2
    description: Position of the cell.
    read_only: true

  - name: data
    type: "Dictionary"
    read_only: true
    description: "Current cell information:"
    description_list:
      - name: value
        type: string
        text: Cell value.
      - name: formula
        type: string
        text: Cell formula.
      - name: background_color
        type: string
        text: Background color in HEX format.
      - name: background_text
        type: string
        text: Text color in HEX format.

  - name: cloud
    type: "Dictionary"
    description: "Same information as <code>data</code>, it's the current data of the file in the cloud, all its values ​​cannot be edited."
    read_only: true

methods:
  - name: SetValue
    description: Write the new value in <code>data</code> and add the cell to update.
    parameters:
      - name: value
        type: string|number
        description: New value.

  - name: Clear
    description: Delete the data from the cell.

---