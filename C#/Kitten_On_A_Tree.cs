using System;
using System.Collections.Generic;

class Program
{
    public static void Main(string[] args)
    {
        int cat = Int32.Parse(Console.ReadLine());
        List<int[]> tree = new List<int[]>();

        // Build the tree
        while (true)
        {
            string input = Console.ReadLine();
            if (input == "-1")
                break;

            string[] branch = input.Split(" ");
            int[] goodBranch = new int[branch.Length];
            // Build the branches
            for (int i = 0; i < branch.Length; i++)
            {
                goodBranch[i] = Int32.Parse(branch[i]);
            }
            tree.Add(goodBranch);
        }

        string pathDown = cat.ToString();
        int currentBranch = cat;

        // For every branch
        for (int i = 0; i < tree.Count; i++)
        {
            for (int j = 1; j < tree[i].Length; j++)
            {
                if (tree[i][j] == currentBranch)
                {
                    currentBranch = tree[i][0];
                    pathDown += " " + currentBranch;
                    i = -1;
                    break;
                }
            }
        }

        Console.WriteLine(pathDown);
    }
}