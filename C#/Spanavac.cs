using System;

class Program
{
    public static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(" ");
        int totalMins = (Int32.Parse(input[0]) * 60) + Int32.Parse(input[1]) - 45;
        totalMins = totalMins < 0 ? ((24 * 60) + totalMins) : totalMins;

        Console.WriteLine( totalMins / 60 + " " + totalMins % 60);
    }
}