export declare enum ExistingMatchBehavior {
    /**
     * Restart the match if any match settings differ. This is the default because old RLBot always worked this way.
     */
    Restart_If_Different = 0,
    /**
     * Always restart the match, even if config is identical
     */
    Restart = 1,
    /**
     * Never restart an existing match, just try to remove or spawn cars to match the configuration.
     * If we are not in the middle of a match, a match will be started. Handy for LAN matches.
     */
    Continue_And_Spawn = 2
}
