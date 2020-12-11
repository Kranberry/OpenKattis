using System;

class Program
{
    public static void Main(string[] args)
    {
        string[] inputs = Console.ReadLine().Split(" ");
        int maxGroups = Int32.Parse(inputs[0]);
        int numberOfEvents = Int32.Parse(inputs[1]);

        int currentGroupNumber = 0;
        int notAllowedIn = 0;

        for(int i = 0; i < numberOfEvents; i++)
        {
            string[] actions = Console.ReadLine().Split(" ");
            int groupAction = Int32.Parse(actions[1]);

            if(actions[0] == "enter")
            {
                if(currentGroupNumber + groupAction > maxGroups)
                {
                    notAllowedIn++;
                }
                else
                {
                    currentGroupNumber += groupAction;
                }
            }
            else if(actions[0] == "leave")
            {
                currentGroupNumber -= groupAction;
            }
        }

        Console.WriteLine(notAllowedIn);
    }
}