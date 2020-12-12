using System;

class Program
{
    public static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(" ");
        int[] dice = new int[input.Length];
        dice[0] = Int32.Parse(input[0]);
        dice[1] = Int32.Parse(input[1]);

        int lowestDice = dice[0] >= dice[1] ? dice[1] : dice[0];
        int highDice = dice[0] >= dice[1] ? dice[0] : dice[1];

        for(int i = lowestDice + 1; i <= highDice + 1; i++)
        {
            Console.WriteLine(i);
        }
    }
}