using System;

class Program
{
    public static void Main(string[] args)
    {
        int input = Int32.Parse(Console.ReadLine());

        Console.WriteLine(1 + Math.Ceiling(Math.Log(input) / Math.Log(2)));
    }
}