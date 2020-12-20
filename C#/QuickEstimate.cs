using System;

class Program
{
    public static void Main(string[] args)
    {
        int n = Int32.Parse(Console.ReadLine());
        for(int i = 0; i < n; i++)
            Console.WriteLine( Console.ReadLine().Length );
    }
}