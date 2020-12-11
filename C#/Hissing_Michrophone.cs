using System;

class Program
{
    public static void Main(string[] args)
    {
        string input = Console.ReadLine();
        bool hiss = false;

        for(int i = 0; i < input.Length-1; i++)
        {
            if(input[i] == 's' && input[i+1] == 's')
            {
                hiss = true;
                break;
            }
        }

        Console.WriteLine(hiss ? "hiss" : "no hiss");
    }
}