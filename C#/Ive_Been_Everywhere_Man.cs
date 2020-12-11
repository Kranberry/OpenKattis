using System;
using System.Collections.Generic;

class Program
{
    public static void Main(string[] args)
    {
        int testCases = Int32.Parse(Console.ReadLine());
        int[] outputs = new int[testCases];

        for(int i = 0; i < testCases; i++)
        {
            int amoutOfCountries = Int32.Parse(Console.ReadLine());
            List<string> countries = new List<string>();

            for(int j = 0; j < amoutOfCountries; j++)
            {
                countries.Add(Console.ReadLine());
            }

            // Remove all the duplicates
            for(int j = 0; j < countries.Count; j++)
            {
                for(int k = j+1; k < countries.Count; k++)
                {
                    if(countries[j] == countries[k])
                    {
                        countries.RemoveAt(k);
                        k--;
                    }
                }
            }

            outputs[i] = countries.Count;
        }

        for(int i = 0; i < outputs.Length; i++)
        {
            Console.WriteLine(outputs[i]);
        }
    }
}