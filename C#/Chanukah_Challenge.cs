using System;

class Program
{
    public static void Main(string[] args)
    {
        int testCases = Int32.Parse(Console.ReadLine());

        int[] candlesNeeded = new int[testCases];

        // i = testCase
        for(int i = 0; i < testCases; i++)
        {
            int days = Int32.Parse(Console.ReadLine().Split(" ")[1]);
            candlesNeeded[i] = 0;

            // j = dayCount
            for(int j = 1; j <= days; j++)
            {
                candlesNeeded[i] += j + 1;
            }
        }

        for(int i = 0; i < testCases; i++)
        {
            Console.WriteLine(i + 1 + " " + candlesNeeded[i]);
        }
    }
}