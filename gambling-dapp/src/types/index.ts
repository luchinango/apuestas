export interface Player {
    address: string;
    chosenNumber: number;
}

export interface GameStatus {
    roundNumber: number;
    totalPot: number;
    lastWinners: string[];
    winningNumber: number;
}

export interface Bet {
    player: string;
    amount: number;
    chosenNumber: number;
}