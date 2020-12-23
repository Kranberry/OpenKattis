using System;

class Program
{
    public static void Main(string[] args)
    {
        int input = Int32.Parse(Console.ReadLine());

        Console.WriteLine(input % 2 == 0 ? "Bob" : "Alice");
    }
}