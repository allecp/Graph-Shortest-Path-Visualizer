type ModeType = '' | "generate" | "build";

type NodeInfo = {id: string, cost: number, used: boolean};
type AdjInfo = {target: string, weight: number, id: string}
type AlgoType = "Select Algorithm" | "Djikstras" | "Bellman-Ford"

export type {ModeType, NodeInfo, AdjInfo, AlgoType}


