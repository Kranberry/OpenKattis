using System;

namespace TimeLoop
{
    class Program
    {
        public static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());
            
            for( int i = 0; i < n; i++ )
            {
                int x = i + 1;
                Console.WriteLine(x + " Abracadabra");
            }
        }
    }
}