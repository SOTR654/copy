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
    description: 'Current cell information:
     <ul style="padding: 0; list-style-type: none;">
        <li>
            <b>value:</b> <code>string</code>
            <br> Cell value
            <br>
        </li>
        <li>
            <b>formula:</b> <code>string</code>
            <br> Cell formula
            <br>
        </li>
        <li>
            <b>background_color:</b> <code>string</code>
            <br> Background color in HEX format.
            <br>
        </li>
        <li>
            <b>background_text:</b> <code>string</code>
            <br> Text color in HEX format.
        </li>
    </ul>'
    read_only: true

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