using System;

class Program
{
    public static void Main(string[] args)
    {
        string input = Console.ReadLine();
        string name = input[0].ToString();

        for(int i = 0; i < input.Length-1; i++)
        {
            if(input[i] != input[i+1])
            {
                name += input[i+1];
            }
            else
            {

            }
        }

        Console.WriteLine(name);
    }
}