using System;

class Program
{
    static void Main(string[] args)
    {
        int surfPerMonth = Int32.Parse(Console.ReadLine());
        int amountOfMonths = Int32.Parse(Console.ReadLine());

        int savedSurf = 0;

        for (int i = 0; i < amountOfMonths; i++)
        {
            int surfUsed = Int32.Parse(Console.ReadLine());
            savedSurf += surfPerMonth - surfUsed;
        }

        Console.WriteLine(savedSurf + surfPerMonth);

    }
}

