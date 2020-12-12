using System;
using System.Collections.Generic;

class Program
{
    public static void Main(string[] args)
    {
        int testCases = Int32.Parse(Console.ReadLine());

        List<string> outputs = new List<string>();

        for(int i = 0; i < testCases; i++)
        {
            string input = Console.ReadLine();
            string simon = "Simon says";

            if(input.StartsWith(simon))
            {
                outputs.Add(input.Substring(simon.Length));
            }
        }

        for(int i = 0; i < outputs.Count; i++)
        {
            Console.WriteLine(outputs[i]);
        }
    }
}