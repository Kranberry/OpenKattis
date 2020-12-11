using System;

class Program
{
    public static void Main(string[] args)
    {
        int cases = Int32.Parse(Console.ReadLine());
        int[] reverse = new int[cases];

        for(int i = 0; i < cases; i++)
        {
            reverse[i] = Int32.Parse(Console.ReadLine());
        }

        Array.Reverse(reverse);

        for(int i = 0; i < cases; i++)
        {
            Console.WriteLine(reverse[i]);
        }
    }
}