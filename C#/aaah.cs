using System;

class Program
{
    public static void Main(string[] args)
    {
        string input = Console.ReadLine();
        string docInput = Console.ReadLine();

        Console.WriteLine(input.Length >= docInput.Length ? "go" : "no");
    }
}