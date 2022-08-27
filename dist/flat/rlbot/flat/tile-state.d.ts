export declare enum TileState {
    Unknown = 0,
    /**
     * The default state of the tiles.
     */
    Filled = 1,
    /**
     * The state when a tile has been damaged.
     */
    Damaged = 2,
    /**
     * The state of a tile when it is open and a goal can be scored.
     */
    Open = 3
}