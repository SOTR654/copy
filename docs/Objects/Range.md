---
layout: page
description: Focused on a Range object.

properties:
  - name: Parent
    type: Sheet
    description: Page that created this range.
    read_only: true

  - name: List
    type: "{[string]: Cell}"
    description: Dictionary with all cells, you cannot add or remove cells.
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