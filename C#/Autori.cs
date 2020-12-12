using System;

class Program
{
    public static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split("-");
        string output = "";

        for(int i = 0; i < input.Length; i++)
        {
            Console.Write(input[i][0]);
        }
    }
}