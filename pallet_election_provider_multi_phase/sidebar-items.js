initSidebarItems({"enum":[["ElectionCompute","The type of `Computation` that provided this election data."],["ElectionError","Internal errors of the pallet."],["FallbackStrategy","A configuration for the pallet to indicate what should happen in the case of a fallback i.e. reaching a call to `elect` with no good solution."],["FeasibilityError","Errors that can happen in the feasibility check."],["Phase","Current phase of the pallet."]],"fn":[["dispatch_error_to_invalid","convert a DispatchError to a custom InvalidTransaction with the inner code being the error number."]],"macro":[["log",""]],"mod":[["helpers","Some helper functions/macros for this crate."],["pallet","The module that hosts all the FRAME types needed to add this pallet to a runtime."],["signed","The signed phase implementation."],["unsigned","The unsigned phase, and its miner."],["weights","Autogenerated weights for pallet_election_provider_multi_phase"]],"struct":[["OnChainConfig","Wrapper type that implements the configurations needed for the on-chain backup."],["RawSolution","A raw, unchecked solution."],["ReadySolution","A checked solution, ready to be enacted."],["RoundSnapshot","A snapshot of all the data that is needed for en entire round. They are provided by [`ElectionDataProvider`] and are kept around until the round is finished."],["SolutionOrSnapshotSize","Encodes the length of a solution or a snapshot."]],"trait":[["BenchmarkingConfig","Configuration for the benchmarks of the pallet."]],"type":[["OnChainAccuracyOf","The accuracy of the election, when computed on-chain. Equal to [`Config::OnChainAccuracy`]."],["SolutionAccuracyOf","The accuracy of the election, when submitted from offchain. Derived from [`SolutionOf`]."],["SolutionOf","The solution type used by this crate."],["SolutionTargetIndexOf","The target index. Derived from [`SolutionOf`]."],["SolutionVoterIndexOf","The voter index. Derived from [`SolutionOf`]."]]});