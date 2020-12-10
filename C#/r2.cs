using System;

namespace Rawr
{
    class Program
    {
        public static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] sNums = input.Split(' ');
            int[] nums = new int[2] { Convert.ToInt32(sNums[0]), Convert.ToInt32(sNums[1]) };
            
            int n2 = (nums[1]*2) - (nums[0]);
            Console.WriteLine(n2);
        }
    }
}