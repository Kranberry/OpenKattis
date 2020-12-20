using System;

class Program
{
    // Gold => 3 
    // Silver => 2 
    // Copper => 1 
    public static void Main(string[] args)
    {
        int[] hand = Array.ConvertAll(Console.ReadLine().Split(" "), int.Parse);
        int points = 3 * hand[0];
        points += 2 * hand[1];
        points += 1 * hand[2];

        if(points >= 8)
            Console.WriteLine("Province or Gold");
        else if(points >= 6)
            Console.WriteLine("Duchy or Gold");
        else if(points >= 5)
            Console.WriteLine("Duchy or Silver");
        else if(points >= 3)
            Console.WriteLine("Estate or Silver");
        else if(points >= 2)
            Console.WriteLine("Estate or Copper");
        else if(points < 2)
            Console.WriteLine("Copper");
        
    }
}