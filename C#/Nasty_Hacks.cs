using System;

class Program
{
    static void Main(string[] args)
    {
        int cases = Int32.Parse(Console.ReadLine());

        for(int i = 0; i < cases; i++)
        {
            string[] inputs = Console.ReadLine().Split(" ");
            int noAd = Int32.Parse(inputs[0]);
            int yesAd = Int32.Parse(inputs[1]);
            int costAd = Int32.Parse(inputs[2]);

            if (yesAd - costAd == noAd)
            {
                Console.WriteLine("does not matter");
            }
            else if (yesAd - costAd > noAd)
            {
                Console.WriteLine("advertise");
            }
            else if (yesAd - costAd < noAd)
            {
                Console.WriteLine("do not advertise");
            }
        }
    }
}
