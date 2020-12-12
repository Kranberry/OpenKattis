using System;
using System.Collections.Generic;

class Program
{
    public static void Main(string[] args)
    {
        // Need to use the pythgorous(?) theorem to get the diagonal of the box
        string[] input = Console.ReadLine().Split(" ");
        int matches = Int32.Parse(input[0]);
        double width = Int32.Parse(input[1]);
        double height = Int32.Parse(input[2]);
        double boxDiagonal = Math.Sqrt(Math.Pow(width, 2) + Math.Pow(height, 2));

        List<string> output = new List<string>();

        for(int i = 0; i < matches; i++)
        {
            int matchLenght = Int32.Parse(Console.ReadLine());

            if(matchLenght <= width || matchLenght <= height || matchLenght <= boxDiagonal)
                output.Add("DA");
            else
                output.Add("NE");
        }

        foreach(string element in output)
            Console.WriteLine(element);        
    }
}