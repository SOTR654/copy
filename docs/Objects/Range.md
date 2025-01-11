---
layout: page
description: Focused on a Range object; <code>Range</code> are immutable but you can build new ones.

properties:
  - name: Parent
    type: Sheet
    description: Page that created this range.

  - name: List
    type: "{[string]: Cell}"
    description: Dictionary with all cells using their ID.

  - name: Start
    type: Cell
    description: The cell closest to (0,0).

  - name: End
    type: Cell
    description: The cell farthest to (0,0).

methods:
  - name: GetSize
    description: Returns the number of cells in (Rows, Columns) of the range.
    returns:
      - type: Vector2
        description: (Rows, Columns)

  - name: Sort
    description: Returns a sorted list with all cells.
    parameters:
      - name: Sort
        type: "((c1: Cell, c2: Cell) -> boolean)?"
        description: Option function to sort, will apply the same logic as <code>table.sort</code>.
    returns:
      - type: "{Cell}"
        description: Sorted list of cells.

  - name: Filter
    description: Returns all cells that pass the filter.
    parameters:
      - name: Function
        type: "(c: Cell) -> boolean"
        description: Filter function.
    returns:
      - type: "{Cell}"
        description: List of cells.

  - name: Move
    description: Returns all cells that pass the filter.
    parameters:
      - name: ID
        type: string
        description: ID of the cell position where everything will be moved, it will move according to <code>Start</code>.
      - name: BruteReplace
        type: "boolean?"
        description: "true: it will replace everything including empty cells.
        false: it will replace everything ignoring empty cells."
      - name: DeleteOriginal
        type: "boolean?"
        description: "true: the cells will be moved, the original ones will be empty.
        false: the cells will be copied and not emptied."
    returns:
      - type: Range
        description: New range with the cells that were replaced.
    
  - name: ClearAll
    description: Delete the data from the cell.

---