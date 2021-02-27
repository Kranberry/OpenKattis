using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    public static void Main(string[] args)
    {
        int numOfQuestions = Int32.Parse(Console.ReadLine());
        string[] answers = new string[numOfQuestions];

        for(int i = 0; i < numOfQuestions; i++)
            answers[i] = Console.ReadLine();
        
        int score = 0;
        for(int i = 0; i < answers.Length - 1; i++)
        {
            if(answers[i] == answers[i+1])
                score++;
        }

        Console.WriteLine(score);
    }
}