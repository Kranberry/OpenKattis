using System;

class Program
{
    public static void Main(string[] args)
    {
        int testCases = Int32.Parse(Console.ReadLine());
        int[] output = new int[testCases];

        for(int i = 0; i < testCases; i++)
        {
            output[i] = 1;
            string[] input = Console.ReadLine().Split(" ");
            int[] test = new int[input.Length];

            for(int j = 0; j < input.Length; j++)
            {
                test[j] = Int32.Parse(input[j]);
            }

            for(int j = 1; j < test.Length; j++)
            {
                // Console.WriteLine("::: " + test[j]);
                output[i] += test[j] - 1;
            }
        }

        foreach(int element in output)
        {
            Console.WriteLine(element);
        }
    }
}