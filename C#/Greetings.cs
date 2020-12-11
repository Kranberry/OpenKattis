using System;
using System.Text;

class Program
{
    public static void Main(string[] args)
    {

        string input = Console.ReadLine();
        int eeee = input.Length - 2;

        string output = "h";
        StringBuilder sb = new StringBuilder(output);

        for(int i = 0; i < eeee; i++)
        {
            sb.Append("ee");
        }

        Console.WriteLine(sb.ToString() + "y");
    }
}